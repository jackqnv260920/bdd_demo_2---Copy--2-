

    /////locator
  

        // const loginbutton = page.locator("id=login-button");
        // const txtproduct = page.locator("Products");


    


    ///method
    async function gotoweb(page){
        await page.goto('https://www.saucedemo.com/');
    }

    async function input(page){

        const username = page.locator("//input[@id='user-name']") ;
        const password = page.locator("//input[@id='password']");
        await username.click();
        await username.fill("a");
        await password.click();
        await password.fill("a");
    }

    async function login(page){
        const loginbutton = page.locator("id=login-button");
        await loginbutton.click();
    }

    ////login method
    async function login_success(page){
        const txtproduct = page.locator("Products");
        if(await txtproduct.getByText(txtproduct).textContent() == "Products"){
            console.log("hệ thống vào được trang product");
        }else{
            // await expect(this.page.getByText(this.txtproduct)).not.toBeVisible();
            console.log("hệ thống không vào được trang product");
        }
    }


export default {gotoweb,input,login,login_success};
