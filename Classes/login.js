export class LoginPage
{

    constructor(page)
    {
        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.password_textbox = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.menuButton = page.getByRole('button', { name: 'Open Menu' })
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')
    }

    async goToLoginPage(website)
    {
        await this.page.goto(website);
    }

    async login(username,pass)
    {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(pass);
        await this.loginButton.click();
    }

    async logout()
    {
        await this.menuButton.click();
        await this.logoutButton.click();
    }

}