describe("Test valid user login", () => {
  it("Verify user login with valid credentials", () => {
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
    cy.get("input[data-qa='login-passowrd']").type("test123");

    //Click 'login' button
    cy.get("button[data-qa='login-button']").click();

    //Verify that 'Logged in as username' is visible
    cy.get("li:nth-child(10) a:nth-child(1)").should("contain", "Logged in as");
  });
});
