class CheckoutPage {
    get firstName() {
        return $('#first-name');
    }

    get lastName() {
        return $('#last-name');
    }

    get postalCode() {
        return $('#postal-code');
    }

    get continueBtn() {
        return $('#continue');
    }

    get itemTotal() {
        return $('.summary_subtotal_label');
    }

    get totalPrice() {
        return $('.summary_total_label');
    }

    get finishBtn() {
        return $('#finish');
    }

    get successMessage() {
        return $('[data-test="complete-header"]');
    }

    async fillInfo(firstName, lastName, zip) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(zip);
        await this.continueBtn.click();
    }

    async getTotalAmount() {
        const text = await this.totalPrice.getText();
        return parseFloat(text.replace('Total: $', ''));
    }

    async finishCheckout() {
        await this.finishBtn.click();

        await browser.waitUntil(async () => {
            return await this.successMessage.isDisplayed();
        }, 
        {
            timeout: 5000,
            timeoutMsg: 'Success message did not appear after checkout'
        });
    }
}

module.exports = new CheckoutPage();
