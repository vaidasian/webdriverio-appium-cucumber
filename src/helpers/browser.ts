export class Browser {
    static async openBrowser(): Promise<void> {
        await browser.url("/");
    }

    static async browserTitle(pageTitle: string): Promise<void> {
        const browserTitle: string = await browser.getTitle();
        if (browserTitle !== pageTitle) {
            await browser.waitUntil(async function (): Promise<boolean> {
                console.log('  DEBUG: browser title => ' + await browser.getTitle());
                return (await browser.getTitle()).includes(pageTitle);
            }, {
                timeout: 10000,
                timeoutMsg: `expected browser title to be different after 10s => ${pageTitle} != ${await browser.getTitle()}`
            });
            console.log(`  DEBUG: Successfully waited for browser title to be => ${pageTitle} == ${await browser.getTitle()}`);
        }
    }
}