





   
        const username1 = "//input[@id='user-name']";
        const password1 = "//input[@id='password']";
        const loginbutton = "id=login-button";
        const txtproduct = "Products";
    

    ///method
    async function gotoweb(page) {
        await page.goto('https://www.saucedemo.com/');
    }

    async function inpupt_username_pass(page) {
        
        await page.locator(username1).click();
        await page.locator(username1).fill("username");
        await page.locator(password1).click();
        await page.locator(password1).fill("password");
    }

    async function login(page) {
        await page.locator(loginbutton).click();
    }

    ////login method
    async function login_success(page) {
        if (await page.getByText(txtproduct).textContent() == "Products") {
            console.log("hệ thống vào được trang product");
        } else {
            // await expect(this.Elements.page.getByText(this.Elements.txtproduct)).not.toBeVisible();
            console.log("hệ thống không vào được trang product");
        }
    }


export default {gotoweb,inpupt_username_pass,login,login_success};

