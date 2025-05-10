const LoginPage = require('../pages/loginPage');  
const ProductsPage = require('../pages/productPage');  
const CheckoutPage = require('../pages/checkoutPage');  

describe('Standard User Test Suite', () =>{  
  it('should complete 3-item purchase', async ()=>{  
    await LoginPage.login('standard_user', 'secret_sauce');  
     await browser.pause(5000);
    await ProductsPage.addThreeItems();
    await ProductsPage.goToCart(); 
    //await $('#checkout').click(); 
    await ProductsPage.checkout();
    await browser.pause(5000);
    await CheckoutPage.fillInfo('Himani', 'Das', '23451');  
    await expect(CheckoutPage.totalPrice).toHaveText('Total: $60.45');  
    await CheckoutPage.finishCheckout(); 
    await browser.pause(1000); 
  });  
});  
