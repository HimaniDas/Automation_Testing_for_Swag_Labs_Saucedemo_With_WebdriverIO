const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productPage');
const CheckoutPage = require('../pages/checkoutPage');

describe('Standard User Test Suite', () => {
    it('should complete dynamic product purchase and verify total price', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await browser.pause(5000);
        await ProductsPage.menu();
        await ProductsPage.reset();
        //await ProductsPage.sortBy('Price (low to high)');
        const expectedTotal = await ProductsPage.addItemsByCount(3);
        await ProductsPage.goToCart();
        await ProductsPage.checkout();
        await CheckoutPage.fillInfo('Himani', 'Das', '23451');
        const itemTotalText = await CheckoutPage.itemTotal.getText();
        const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
        expect(itemTotal).toBeCloseTo(parseFloat(expectedTotal), 2);
        await CheckoutPage.finishCheckout();
         });
    it('should verify successful order message', async () => {
        //await expect(CheckoutPage.successMessage).toBeDisplayed({ timeout: 5000 });
        await expect(CheckoutPage.successMessage).toHaveText('Thank you for your order!');
        await ProductsPage.backHome();
        await ProductsPage.menu();
        await ProductsPage.reset();
        await ProductsPage.logout();
        await browser.pause(1000);
    });
});

