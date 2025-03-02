describe("Test invalid user login", () => {
    it("Verify user login with invalid credentials", () => {
      //Navigate to url 'http://automationexercise.com'
      cy.visit("https://automationexercise.com/");
  
      //Verify that home page is visible successfully
      cy.contains("Home");
      //Click on 'Signup / Login' button
      cy.get("a[href='/login']").click();
  
      //Verify 'Login to your account' is visible
      cy.contains("Login to your account");
      // Enter correct email address and password
      cy.get("input[data-qa='login-email']").type("mailtotest@mail.com");
      cy.get('[data-qa="login-password"]').type("test1234");
  
      //Click 'login' button
      cy.get("button[data-qa='login-button']").click();
  
      //Verify error 'Your email or password is incorrect!' is visible
      cy.contains("Your email or password is incorrect!");
    });
  });
  