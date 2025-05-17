class ProductsPage {
    get inventoryItems() {
        return $$('.inventory_item');
    }

    get cartBadge() {
        return $('#shopping_cart_container');
    }

    get checkoutBtn() {
        return $('[data-test="checkout"]');
    }

    get backhomeBtn() {
        return $('[data-test="back-to-products"]');
    }

    get menuBtn() {
        return $('#react-burger-menu-btn');
    }

    get resetBtn() {
        return $('[data-test="reset-sidebar-link"]');
    }

    get logoutBtn() {
        return $('[data-test="logout-sidebar-link"]');
    }

    get sortDropdown() {
        return $('.product_sort_container');
    }
    
    get redTShirtAddBtn(){ 
        return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }

    async sortBy(option) {
        await this.sortDropdown.selectByVisibleText(option);
    }

    async addItemsByCount(count) {
        const itemButtons = await $$('[data-test^="add-to-cart-"]');
        const itemPrices = await $$('div.inventory_item_price');
        // Combine buttons with prices
        const items = [];
        for (let i = 0; i < itemButtons.length; i++) {
            const priceText = await itemPrices[i].getText();
            const price = parseFloat(priceText.replace('$', ''));
            items.push({ button: itemButtons[i], price });
        }
        // Shuffle and pick N random items
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        let total = 0;
        for (let i = 0; i < count; i++) {
            await items[i].button.click();
            total += items[i].price;
        }
         return parseFloat(total);
        //return total.toFixed(2);
    }
    
    async sortZA() {  
        await this.sortDropdown.selectByAttribute('value', 'za');  
    } 
    async addOneItem(){
        await this.redTShirtAddBtn.click();
  }

    async goToCart() {
        await this.cartBadge.click();
    }

    async checkout() {
        await this.checkoutBtn.click();
    }

    async backHome() {
        await this.backhomeBtn.click();
    }

    async menu() {
        await this.menuBtn.click();
    }

    async reset() {
        await this.resetBtn.click();
    }

    async logout() {
        await this.logoutBtn.click();
    }
}

module.exports = new ProductsPage();
