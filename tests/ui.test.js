const {test, expect} = require('@playwright/test')

test("verify 'all books' link is visible", async ({page}) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('nav.navbar')
    
    const allBooksLink = await page.$('a[href="/catalog"]')
    const isLinkVisible = await allBooksLink.isVisible()
    
    expect(isLinkVisible).toBeTruthy()
})

test("verify 'login' button is visible", async ({page}) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('nav.navbar')
    
    const loginBtn = await page.$('a[href="/login"]')
    const isLoginBtnVisible = await loginBtn.isVisible()
    
    expect(isLoginBtnVisible).toBeTruthy()
})

test("verify 'register' button is visible", async ({page}) => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('nav.navbar')
    
    const registerBtn = await page.$('a[href="/register"]')
    const isRegisterBtnVisible = await registerBtn.isVisible()
    
    expect(isRegisterBtnVisible).toBeTruthy()
})

test("verify 'all books' link is visible after login", async ({page}) => {
    await page.goto('http://localhost:3000/login')
    await page.fill('input[name="email"]', 'peter@abv.bg')
    await page.fill('input[name="password"]', '123456')
    await page.click('input[type="submit"]')

    const allBooksLink = await page.$('a[href="/catalog"]')
    const isAllBooksLinkVisible = await allBooksLink.isVisible()

    expect(isAllBooksLinkVisible).toBe(true)
})

test("verify 'logout' button is visible after login", async ({page}) => {
    await page.goto('http://localhost:3000/login')
    await page.fill('#email', 'peter@abv.bg')
    await page.fill('input[name="password"]', '123456')
    await page.click('input[type="submit"]')

    const logoutBtn = await page.$('#logoutBtn')
    const isLogoutVisible = await logoutBtn.isVisible()

    expect(isLogoutVisible).toBe(true)
})

test("verify 'my books' button is visible after login", async ({page}) => {
    await page.goto('http://localhost:3000/login')
    await page.fill('#email', 'peter@abv.bg')
    await page.fill('input[name="password"]', '123456')
    await page.click('input[type="submit"]')

    const myBooksBtn = await page.$('a[href="/profile"]')
    const isMyBooksVisible = await myBooksBtn.isVisible()

    expect(isMyBooksVisible).toBe(true)
})