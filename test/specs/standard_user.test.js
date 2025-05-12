
const LoginPage = require('../pages/loginPage');  
const ProductsPage = require('../pages/productPage');  
const CheckoutPage = require('../pages/checkoutPage');  

describe('Standard User Test Suite', () => {
  it('should complete 3-item purchase', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await browser.pause(5000);
    await ProductsPage.menu();
    await ProductsPage.reset();
    await ProductsPage.addThreeItems();
    await ProductsPage.goToCart();
    await ProductsPage.checkout();
    await CheckoutPage.fillInfo('Himani', 'Das', '23451');
    await expect(CheckoutPage.totalPrice).toHaveText('Total: $60.45');
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
