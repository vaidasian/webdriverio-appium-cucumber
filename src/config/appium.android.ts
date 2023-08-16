import { config as sharedConfig } from "./wdio.shared.conf";
import dotenv from "dotenv";

dotenv.config();

export const config: WebdriverIO.Config = {
    ...sharedConfig,
        ///*
        services: ['appium'],
        //*/
        /*
        // [optional] cannot run with only @wdio/appium-service
        services: [
            ['appium', {
                args: {
                    address: 'localhost',
                    basePath: '/wd/hub',
                    port: 4723,
                    relaxedSecurity: true,
                    debugLogSpacing: true,
                    log: './logs/2023-08-15_wdio-appium-service_appium.log',
                    logLevel: 'error:debug',
                },
            }],
        ],
        //*/
        capabilities: [{
            platformName: 'Android',
            browserName: 'Chrome',
            'appium:deviceName': 'Pixel_3a_API_34_extension_level_7_arm64-v8a', // real: R58M7193KHH
            'appium:platformVersion': '10', // real: 11
            'appium:automationName': 'UiAutomator2',
            'appium:orientation': 'PORTRAIT',
            'appium:newCommandTimeout': 240,
        }],
}
