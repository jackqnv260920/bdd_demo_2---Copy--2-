import { createBdd } from 'playwright-bdd';
import {expect} from '@playwright/test';
import LoginPage from  '../pages/loginpagejs';


const { Given, When, Then } = createBdd();

// 1. Missing step definition for "login.feature:5:5"
Given('User thực hiện mở web', async ({ page }) => {
     await LoginPage.gotoweb(page);
    // await page.goto("https://www.saucedemo.com/");
});

// 2. Missing step definition for "login.feature:6:5"
When('ở màn hình đăng nhập user nhập username và password', async ({page}) => {
  await LoginPage.input(page);
});

// 3. Missing step definition for "login.feature:7:5"
When('User bấm vào button login', async ({page}) => {
    await LoginPage.login(page);
});

// 4. Missing step definition for "login.feature:8:5"
Then('hệ thống hiển thị màn hình product', async ({page}) => {
   await LoginPage.login_success(page);
});

