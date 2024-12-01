import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Form Layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("input fields", async ({ page }) => {
    const usingTheGridEmailInput = page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "email" });
    // await usingTheGridEmailInput.fill("test@test.com");
    await usingTheGridEmailInput.pressSequentially("test@test.com", {
      delay: 500,
    });

    //generic
    const inputValue = await usingTheGridEmailInput.inputValue();

    expect(inputValue).toEqual("test@test.com");

    //locator
    await expect(usingTheGridEmailInput).toHaveValue("test@test.com");
  });
});
