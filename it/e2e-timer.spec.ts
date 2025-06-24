import {test, expect} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('http://localhost:9000/');
    await expect(page).toHaveTitle(/Birthday/);
});

test('has telegram link', async ({page}) => {
    await page.goto('http://localhost:9000/');
    await expect(page.getByRole('link')).toMatchAriaSnapshot(`
      - link:
        - /url: https://t.me/naton_van_cliff
        - img
    `);
});

test('timer runs', async ({page}) => {
    await page.clock.setFixedTime(new Date('2025/06/02 8:30:20'));
    await page.goto('http://localhost:9000/');
    await expect(page).toHaveScreenshot();

    await page.clock.setFixedTime(new Date('2025/06/02 8:30:15'));
    await expect(page.getByText('45').first()).toBeAttached();
    await expect(page).toHaveScreenshot();

    await page.clock.setFixedTime(new Date('2025/08/10 12:47:35'));
    await expect(page.getByText('25').first()).toBeAttached()
    await expect(page).toHaveScreenshot();
});