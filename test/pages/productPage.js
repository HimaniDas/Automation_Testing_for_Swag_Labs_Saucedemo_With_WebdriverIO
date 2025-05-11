
class ProductsPage {  
  get backpackAddBtn(){ 
    return $('#add-to-cart-sauce-labs-backpack'); 
  }  
  get bikeLightAddBtn(){ 
    return $('#add-to-cart-sauce-labs-bike-light'); 
  }  
  get tshirtAddBtn(){ 
    return $('#add-to-cart-sauce-labs-bolt-t-shirt'); 
  }   
  get redTShirtAddBtn(){ 
    return $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
}
  get cartBadge(){
     return $('#shopping_cart_container'); 
    }  
  get sortDropdown(){ 
    return $('.product_sort_container'); 
  }  
  get checkoutBtn(){ 
    return $('[data-test="checkout"]');
  } 
  get backhomeBtn(){ 
    return $('[data-test="back-to-products"]');
  }  
  get menuBtn(){
     return $('[id="react-burger-menu-btn"]');
  }
  get resetBtn(){
     return $('[data-test="reset-sidebar-link"]');
  }
  get logoutBtn(){
     return $('[data-test="logout-sidebar-link"]');
  }

  async addThreeItems(){  
    await this.backpackAddBtn.click();  
    await this.bikeLightAddBtn.click();
    await this.tshirtAddBtn.click();  
  }  
  async checkout(){
    await this.checkoutBtn.click();
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
    await this.logoutBtn.click(); //logout
  }
  
}  
module.exports = new ProductsPage();