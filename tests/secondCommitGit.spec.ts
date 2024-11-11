import { test, expect } from '@playwright/test';

test('checked checkbox', async ({ page }) => {
  await page.goto('http://localhost:4200/'); 

  await page.getByText("Forms").click()
  await page.getByText("Form Layouts").click()
  await page.getByRole("textbox", {name:"Email"}).first().click()
  await page.getByRole("button", {name:"SIGN IN"}).first().click()
  await page.locator("nb-card nb-radio :text('Option 1')").first().click()
  await page.locator("nb-card nb-radio :text('Option 2')").first().click()
});


test('find unique element', async ({ page }) => {
  
  await page.getByText("Forms").click()
  await page.getByText("Form Layouts").click()
  await page.locator("nb-card", {hasText:"Using the Grid"}).getByRole("textbox", {name:"Email"}).click()
  await page.locator("nb-card").filter({hasText:"Basic form"}).getByRole("textbox", {name:"Email"}).click()
});


test('find unique element1', async ({ page }) => {
  await page.goto('http://localhost:4200/'); 
  await page.getByText("Forms").click()
  await page.getByText("Form Layouts").click()
  await page.locator("nb-card", {hasText:"Using the Grid"}).getByRole("textbox", {name:"Email"}).click()
  await page.locator("nb-card").filter({hasText:"Basic form"}).getByRole("textbox", {name:"Email"}).click()
});

test('reusing locators', async ({ page }) => {
  await page.goto('http://localhost:4200/')
  await page.getByText("Forms").click()
  await page.getByText("Form Layouts").click()
  const basicForm = page.locator('nb-card').filter({hasText:"Basic form"})
  const emailForm = basicForm.getByRole('textbox', {name: "Email"})
  await emailForm.fill('test@test.com')
  await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123') 
  await basicForm. locator ('nb-checkbox').click() 
  await basicForm.getByRole('button').click()
  await expect(emailForm).toHaveValue('test@test.com')
  });




// test('reusing locators', async ({ page }) => {
//   await page.goto('http://localhost:4200/')
//   const basic = page.locator('nb-card').filter({hasText:"Basic form"})

//   const basicForm = basic.getByRole('textbox', {name: "Email"})
//   await basicForm.fill('test@test.com')

//   await page.goto('http://localhost:4200/')
//   const basic = page.locator('nb-card').filter({hasText:"Basic form"}).getByRole('textbox', {name:"Email"})
//   await basicForm.fill('test@test.com')
//   await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123') 
//   await basicForm. locator ('nb-checkbox').click() 
//   await basicForm.getByRole('button').click()
//   await expect (basicForm).toHaveValue('test@test.com')
//   });
  