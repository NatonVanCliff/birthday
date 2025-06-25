import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: '../it',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:9000',
    },
    expect: {
        toMatchAriaSnapshot: {
            pathTemplate: '__snapshots__/{testFilePath}/{arg}{ext}',
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                viewport: {width: 1442, height: 1073}
            }
        },
        {
            name: 'mobile safari',
            use: {
                browserName: "chromium",
                viewport: {width: 430, height: 932}
            }
        },
        {
            name: 'mobile chromium',
            use: {
                browserName: "chromium",
                viewport: {width: 360, height: 740}
            }
        },
        {
            name: 'ipad chromium',
            use: {
                browserName: "chromium",
                viewport: {width: 768, height: 1024}

            }
        }
    ],
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:9000',
        reuseExistingServer: !process.env.CI,
    },
});
