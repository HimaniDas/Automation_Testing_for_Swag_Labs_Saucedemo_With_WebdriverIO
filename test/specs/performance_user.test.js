const LoginPage = require('../pages/loginPage');  
const ProductsPage = require('../pages/productPage');  
const CheckoutPage = require('../pages/checkoutPage');  

describe('Performance User Test Suite', () =>{  
  it('should complete Z-A sorted purchase', async () =>{  
    await LoginPage.login('performance_glitch_user', 'secret_sauce');
    await browser.pause(10000);
    await ProductsPage.menu();
    await ProductsPage.reset();
    await ProductsPage.sortZA(); 
    await ProductsPage.addOneItem(); 
    await ProductsPage.goToCart();
    await ProductsPage.checkout();
    await browser.pause(5000);
    await CheckoutPage.fillInfo('Himani', 'Das', '23451');  
    await expect(CheckoutPage.totalPrice).toHaveText('Total: $17.27');  
    await CheckoutPage.finishCheckout();
});

  it('should verify successful order message', async () => {
    await expect(CheckoutPage.successMessage).toHaveText('Thank you for your order!');
    await ProductsPage.backHome();
    await ProductsPage.menu();
    await ProductsPage.reset();
    await ProductsPage.logout();
    await browser.pause(1000);
  });
});
