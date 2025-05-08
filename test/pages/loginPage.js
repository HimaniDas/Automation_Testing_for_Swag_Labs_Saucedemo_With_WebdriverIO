class LoginPage{
  get username(){ 
    return $('#user-name');
  }
  get password(){ 
    return $('#password'); 
  }
  get loginButton(){ 
    return $('#login-button'); 
  }
  get errorMessage(){ 
    return $('[data-test="error"]'); 
  }
  async open(){
    await browser.url('https://www.saucedemo.com');
  }

  async login(username, password) {
    await this.open();
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();