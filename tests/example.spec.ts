import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText("Forms").click()
  await page.getByText("Form Layouts").click()
});
