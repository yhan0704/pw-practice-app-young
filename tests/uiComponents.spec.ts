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

  test("radio buttons", async ({ page }) => {
    const usingTheGridForm = page.locator("nb-card", {
      hasText: "using the grid",
    });

    await usingTheGridForm.getByText("option 1").check({ force: true });

    // await expect(usingTheGridForm).toBeChecked({ checked: true });
    const radioStatus = await usingTheGridForm
      .getByRole("radio", { name: "Option 1" })
      .isChecked();
    expect(radioStatus).toBeTruthy();

    expect(usingTheGridForm.getByRole("button", { checked: true }));
  });
});
