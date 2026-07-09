const { test, expect } = require('@playwright/test')
test('login test updated', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login')
    const username = await page.locator('#username').fill('tomsmith')
    const password = await page.locator('#password').fill('SuperSecretPassword!')
    await page.getByText('Login').nth(1).click()
})