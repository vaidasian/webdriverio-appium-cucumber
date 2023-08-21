import dotenv from "dotenv";

dotenv.config();

export const config: WebdriverIO.Config = {
    rootDir: process.cwd(),
    specs: ['./src/features/**/*.feature'],
    framework: 'cucumber',
    baseUrl: process.env.BASEURL,
    suites: {
        login: [
            "./src/features/authentication/login.feature",
        ],
        product: [
            "./src/features/product/product.feature",
        ],
    },
    runner: 'local',
    hostname: 'localhost',
    path: '/',
    port: 4723,
    specFileRetries: 1,
    exclude: [],
    capabilities: [],
    services: [],
    logLevel: 'trace',
    outputDir: 'logs/',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    cucumberOpts: {
        require: ['./src/steps/steps.ts'],
        backtrace: true,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ["pretty"],
        retry: 0,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: 'not @skip',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        scenarioLevelReporter: false,
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    reporters: ['spec'],
    beforeScenario: async function (world): Promise<void> {
        console.log("Scenario: " + world.pickle.name);
    },
    beforeStep: async function (step): Promise<void> {
        console.log(step.text);
    },
}
