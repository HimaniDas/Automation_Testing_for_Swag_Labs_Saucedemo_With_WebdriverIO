const LoginPage = require('../pages/loginPage');  

describe('Locked User Test Suite', () =>{  
  it('should show error for locked_out_user', async () =>{  
    await LoginPage.login('locked_out_user', 'secret_sauce');  
    await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.'); 
    await browser.pause(1000); 
  });  
});  