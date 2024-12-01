import test, { expect } from "@playwright/test";

test("testForExample", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
  const parent = page.locator("div");
  expect(parent.locator("label").getByText("adfasdf"));
  await expect(page.locator("text=adfasdf")).toHaveCount(1);
});
