import { createBdd } from 'playwright-bdd';
import {expect} from '@playwright/test'
import  LoginPgae from '../pages/LoginPagets'


const { Given, When, Then } = createBdd();

// 1. Missing step definition for "login.feature:5:5"
Given('User thực hiện mở web', async ({ page }) => {
     await LoginPgae.gotoweb(page);
    // await page.goto("https://www.saucedemo.com/");
});

// 2. Missing step definition for "login.feature:6:5"
When('ở màn hình đăng nhập user nhập username và password', async ({page}) => {
  await LoginPgae.inpupt_username_pass(page);
});

// 3. Missing step definition for "login.feature:7:5"
When('User bấm vào button login', async ({page}) => {
    await LoginPgae.login(page);
});

// 4. Missing step definition for "login.feature:8:5"
Then('hệ thống hiển thị màn hình product', async ({page}) => {
   await LoginPgae.login_success(page);
});
