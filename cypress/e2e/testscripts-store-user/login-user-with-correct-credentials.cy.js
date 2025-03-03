describe("Test valid user login", () => {
    let data;
  
    beforeEach(() => {
      cy.fixture('user.json').then((userData) => {
        data = userData;
      });
    });
  
    it("Verify user login with valid credentials", () => {
      // Navigate to url 'http://automationexercise.com'
      cy.visit("https://automationexercise.com/");
  
      // Verify that home page is visible successfully
      cy.contains("Home").should('be.visible'); // Added .should('be.visible')
  
      // Click on 'Signup / Login' button
      cy.get("a[href='/login']").click();
  
      // Verify 'Login to your account' is visible
      cy.contains("Login to your account").should('be.visible'); // Added .should('be.visible')
  
      // Enter correct email address and password
      //cy.get("input[data-qa='login-email']").type(data.email);
      //cy.get('[data-qa="login-password"]').type(data.password);
      cy.login(data.email,data.password)
  
      // Click 'login' button
      cy.get("button[data-qa='login-button']").click();
  
      // Verify that 'Logged in as username' is visible
      cy.get("li:nth-child(10) a:nth-child(1)").should("contain", "Logged in as");
    });
  });