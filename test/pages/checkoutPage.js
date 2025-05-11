
class CheckoutPage {  
    get firstName(){ 
        return $('#first-name'); 
    }  
    get lastName(){ 
        return $('#last-name'); 
    }  
    get postalCode(){ 
        return $('#postal-code'); 
    }  
    get continueBtn(){ 
        return $('#continue'); 
    }  
    get itemTotal(){ 
        return $('.summary_subtotal_label'); 
    }  
    get totalPrice(){ 
        return $('.summary_total_label'); 
    }  
    get finishBtn(){ 
        return $('#finish'); 
    } 
    get successMessage(){ 
        return $('[data-test="complete-header"]'); 
    } 
    async fillInfo(firstName, lastName, zip) {  
      await this.firstName.setValue(firstName);  
      await this.lastName.setValue(lastName);  
      await this.postalCode.setValue(zip);  
      await this.continueBtn.click();  
    }  
  
    async finishCheckout(){  
      await this.finishBtn.click();  
    }  
  }  
  
  module.exports = new CheckoutPage();