describe("Test logout user functionality", () => {
  it("Verify user logout", () => {
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    cy.contains("Home");
    // 4. Click on 'Signup / Login' button
    cy.get("a[href='/login']").click();
    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account");
    // Enter correct email address and password
    cy.get("input[data-qa='login-email']").type("mailtotest@mail.com");
    cy.get('[data-qa="login-password"]').type("test123");

    //Click 'login' button
    cy.get("button[data-qa='login-button']").click();

    //Verify that 'Logged in as username' is visible
    cy.get("li:nth-child(10) a:nth-child(1)").should("contain", "Logged in as");

    // 9. Click 'Logout' button
    cy.get("a[href='/logout']").click();
    // 10. Verify that user is navigated to login page
    cy.url().should("include", "/login");
    cy.url().should("eq", "https://automationexercise.com/login");
  });
});
