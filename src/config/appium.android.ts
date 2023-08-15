import { config as sharedConfig } from "./wdio.shared.conf";
import dotenv from "dotenv";

dotenv.config();

export const config: WebdriverIO.Config = {
    ...sharedConfig,
        ///*
        services: ['appium'],
        //*/
        /*
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
            'appium:deviceName': 'R58M7193KHH',
            'appium:platformVersion': '11',
            'appium:automationName': 'UiAutomator2',
            'appium:orientation': 'PORTRAIT',
            'appium:newCommandTimeout': 240,
        }],
}
