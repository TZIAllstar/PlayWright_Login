import { test, expect, chromium } from '@playwright/test';

test("Capturing and Manipulating Elements from the DOM", async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.example.com")
    const Title = await page.textContent('h1')
    console.log(Title)
    await browser.close();
})


test('Example 3: Clicking a button and waiting for navigation', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.example.com")
    await page.getByRole('link', { name: 'More information...' }).click();
    await browser.close();
})

//How can you retrieve the text of an element in Playwright? 
//Write an example to fetch the inner text of a <div> with the class content.
test('get text using content', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("https://www.example.com")
    //body > div
    const Title = await page.textContent('div')
    console.log(Title)
    await browser.close();

})

test('ComboBox', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
    await page.getByRole('combobox').selectOption('Israel');

});


//Main locator methods

test('Locator methods', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://www.saucedemo.com")

    // selector
    const CSSselector = await page.locator('[data-test="username"]').first()
    await CSSselector.fill('asfasf')
    // Example 2: Locating by XPath
    const xpathElement = page.locator('//*[@id="user-name"]')
    await xpathElement.fill('aaaaaaa')

    // Example 3: Using `getByRole` for accessible elements
    const getByRole = page.getByRole('textbox', { name: 'password' })
    await getByRole.fill('asdasdasd');
    await browser.close();
})

//Main Validation Methods of a Page
test.only('Main Validation Methods of a Page', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://www.saucedemo.com")
    await page.pause()
    // Example 1: Validating element visibility
    const isVisible = await page.locator('[data-test="login-password"]').isVisible()
    if (isVisible){
        console.log("yes");
    }
    // Example 2: Validating text content
    const textcontent = await page.locator('[data-test="login-password"]').textContent()
    console.log(textcontent);

    await page.locator('.input_error.form_input').last().click();

    await browser.close();
})


