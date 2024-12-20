import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Classes/login';


test('test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage('https://www.saucedemo.com/');
  await loginPage.login('standard_user','secret_sauce');
  await loginPage.logout();

});

