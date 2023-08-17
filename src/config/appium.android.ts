import { config as sharedConfig } from "./wdio.shared.conf";
import dotenv from "dotenv";

dotenv.config();

export const config: WebdriverIO.Config = {
    ...sharedConfig,
        services: [
            ['appium', {
                command: "appium",
                args: {
                    allowInsecure: true,
                    chromedriver_autodownload: true,
                    address: 'localhost',
                    basePath: '/',
                    port: 4723,
                    relaxedSecurity: true,
                    debugLogSpacing: true,
                    log: 'logs/appium.log',
                },
            }],
        ],
        capabilities: [{
            platformName: 'Android',
            browserName: 'chrome',
            'appium:deviceName': 'emulator-5554', // emulator: emulator-5554, real: R58M7193KHH, pixel: Pixel_3a_API_34_extension_level_7_arm64-v8a
            'appium:platformVersion': '10', // emulator: 10, real: 11, pixel: 14
            'appium:automationName': 'UiAutomator2',
            'appium:orientation': 'PORTRAIT',
            'appium:newCommandTimeout': 240,
        }],
}
