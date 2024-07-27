import * as core from "@actions/core";
import * as Mocha from "mocha";

const Base = Mocha.reporters.Base;
const EVENTS = Mocha.Runner.constants;

class Reporter extends Base {
  constructor(runner) {
    super(runner);
    this.initEnvVariables();
    this.initCounters();
    this.testResults = [];
    this.messages = [];

    this.setupEventListeners(runner);
  }

  initEnvVariables() {
    this.gitHubAuthor = process.env.GITHUB_ACTOR;
    this.gitHubPrUrl = process.env.GITHUB_PR_URL;
  }

  initCounters() {
    this.suites = 0;
    this.totalTests = 0;
    this.totalPasses = 0;
    this.totalFailures = 0;
    this.totalSkips = 0;
    this.passes = 0;
    this.failures = 0;
    this.skips = 0;
  }

  setupEventListeners(runner) {
    runner.on(EVENTS.EVENT_SUITE_BEGIN, this.onSuiteBegin.bind(this));
    runner.on(EVENTS.EVENT_SUITE_END, this.onSuiteEnd.bind(this));
    runner.on(EVENTS.EVENT_TEST_BEGIN, this.onTestBegin.bind(this));
    runner.on(EVENTS.EVENT_TEST_PASS, this.onTestPass.bind(this));
    runner.on(EVENTS.EVENT_TEST_FAIL, this.onTestFail.bind(this));
    runner.on(EVENTS.EVENT_TEST_PENDING, this.onTestSkip.bind(this));
    runner.on(EVENTS.EVENT_RUN_END, this.onRunEnd.bind(this));
  }

  onSuiteBegin(suite) {
    if (suite.title) {
      this.passes = this.failures = this.skips = 0;
      this.suites++;
    }
  }

  onSuiteEnd(suite) {
    if (suite.title) {
      const passRate = this.calculatePassRate(
        this.passes,
        this.failures,
        this.skips
      );
      const testResult = this.createTestResult(
        suite.title,
        this.passes,
        this.failures,
        this.skips,
        this.passes + this.failures + this.skips,
        passRate
      );
      const suiteResult = this.createSuiteResult(
        suite.title,
        passRate,
        this.passes,
        this.failures,
        this.skips
      );

      this.testResults.push(testResult);
      this.messages.push(suiteResult);
    }
  }

  onTestBegin() {
    this.totalTests++;
  }

  onTestPass() {
    this.passes++;
    this.totalPasses++;
  }

  onTestSkip() {
    this.skips++;
    this.totalSkips++;
    this.totalTests++;
  }

  onTestFail() {
    this.failures++;
    this.totalFailures++;
  }

  onRunEnd() {
    const totalPassRate = this.calculatePassRate(
      this.totalPasses,
      this.totalFailures,
      this.totalSkips
    );
    const slackMessage = this.createSlackMessage(totalPassRate);
    const gitHubComment = this.generateGitHubComment();

    core.setOutput("slackMessage", JSON.stringify(slackMessage));
    core.setOutput("githubComment", gitHubComment);
  }

  calculatePassRate(passes, failures, skips) {
    return (passes / (passes + failures + skips)) * 100;
  }

  createTestResult(suiteTitle, passes, failures, skips, totalTests, passRate) {
    return {
      testSuiteName: suiteTitle,
      passedTests: passes,
      failedTests: failures,
      skippedTests: skips,
      totalTests,
      passRate: formatRate(passRate),
    };
  }

  createSuiteResult(suiteTitle, passRate, passes, failures, skips) {
    return {
      color: getColorCode(passRate),
      title: `📌 ${suiteTitle}`,
      fields: [
        { title: "# Pass", value: `${passes}`, short: true },
        { title: "# Fail", value: `${failures}`, short: true },
        { title: "# Skip", value: `${skips}`, short: true },
        { title: "Pass Rate (%)", value: formatRate(passRate), short: true },
      ],
    };
  }

  createSlackMessage(totalPassRate) {
    return {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `:memo: ${this.gitHubAuthor} 님의 테스트 실행 결과`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*<${this.gitHubPrUrl}|:link: PR로 이동하기>*\n`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Passed Tests:*\n${this.totalPasses}`,
            },
            {
              type: "mrkdwn",
              text: `*Failed Tests:*\n${this.totalFailures}`,
            },
            {
              type: "mrkdwn",
              text: `*Skipped Tests:*\n${this.totalSkips}`,
            },
            {
              type: "mrkdwn",
              text: `*Pass Rate(%):*\n${formatRate(totalPassRate)}`,
            },
          ],
        },
        {
          type: "divider",
        },
      ],
      attachments: this.messages,
    };
  }

  generateGitHubComment() {
    const overallResults = {
      totalPasses: this.totalPasses,
      totalFailures: this.totalFailures,
      totalSkips: this.totalSkips,
      totalTests: this.totalTests,
    };

    const passRate =
      (overallResults.totalPasses / overallResults.totalTests) * 100;
    const overallMetrics = `
### 테스트 실행 결과

#### 결과 요약

| Metric             | Value             |
|--------------------|-------------------|
| **Total Tests**    | ${overallResults.totalTests}     |
| **Passed Tests**   | ${overallResults.totalPasses}    |
| **Failed Tests**   | ${overallResults.totalFailures}  |
| **Skipped Tests**  | ${overallResults.totalSkips}     |
| **Pass Rate**      | ${formatRate(passRate)}|
`;

    const detailedMetricsHeader = `
#### 결과 상세

| Test Suite | Passed | Failed | Skipped | Total | Pass Rate(%) |
|-----------------|---------------|--------------|---------------|--------------|--------------|
`;

    const detailedMetrics = this.testResults
      .map(
        ({
          testSuiteName,
          passedTests,
          failedTests,
          skippedTests,
          totalTests,
          passRate,
        }) => {
          return `| \`${testSuiteName}\` | ${passedTests} | ${failedTests} | ${skippedTests} | ${totalTests} | ${passRate} |`;
        }
      )
      .join("\n");

    return overallMetrics + detailedMetricsHeader + detailedMetrics;
  }
}

const formatRate = (rate) => `${rate.toFixed(2)}%`;

const MAP_COLOR_CODE = {
  GOOD: "#008000",
  AVERAGE: "#FFBF00",
  POOR: "#C70039",
};

const getColorCode = (passRate) => {
  if (passRate >= 80) {
    return MAP_COLOR_CODE.GOOD;
  } else if (passRate >= 50) {
    return MAP_COLOR_CODE.AVERAGE;
  } else {
    return MAP_COLOR_CODE.POOR;
  }
};

module.exports = Reporter;
