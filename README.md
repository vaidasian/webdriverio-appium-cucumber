# webdriverio-appium-cucumber

```bash
[Steps to reproduce]
Provided sample can be locally executed as follows:
adapt android device here ./src/config/appium.android.ts
npm i
npm run e2e:cucumber:android:suite_product

[Optional] Appium - Real mobile device
npx appium-installer
adb devices

[BUG]
Node version: 18.16.1
NPM version: 9.5.1
Platform: Android or iOS
Platorm version: 11
Real Device: true
Appium version: 2.0.1

Description:
When running multiple scenarios in one feature file and using Cucumber's retry logic the session will be deleted after the last test run - failed or passed.
Hence, the re-run or any other commands after that will cause the error message:
"WARN webdriver: Request failed with status 404 due to A session is either terminated or not started".
This will cause an issue on any cloud provider setup like Browserstack or SauceLabs as the device is already disconnected after the command "deleteSession()".

Browserstack's solution is to remove cucumber step "Then verify empty cart page" which will not cause any error.
This is not a proper and future oriented solution.

Attachments:
See ./bugs/2023-08-15_appium_wdio_retry_multiple_scenario_issue_wdio-0-0.log for a detailed webdriverio test log.
2023-08-15T10:23:59.926Z INFO webdriver: COMMAND deleteSession()
2023-08-15T10:23:59.926Z INFO webdriver: [DELETE] http://127.0.0.1:4723/session/3b5e45f0-f308-4201-9772-8390cdcbf107
2023-08-15T10:24:00.024Z INFO webdriver: COMMAND findElements("css selector", ".title")
2023-08-15T10:24:00.025Z INFO webdriver: [POST] http://127.0.0.1:4723/session/3b5e45f0-f308-4201-9772-8390cdcbf107/elements
2023-08-15T10:24:00.025Z INFO webdriver: DATA { using: 'css selector', value: '.title' }
2023-08-15T10:24:00.041Z DEBUG webdriver: request failed due to response error: invalid session id
2023-08-15T10:24:00.041Z WARN webdriver: Request failed with status 404 due to A session is either terminated or not started

When 2 out of 3 scenarios in the feature file "./src/features/product/product.feature" will be set to @skip
then no error will occur, see ./bugs/2023-08-15_appium_wdio_retry_single_scenario_no_issue_wdio-0-0.log.

Question: How to best use Cucumber's retry logic on appium w/o getting errors? 
```