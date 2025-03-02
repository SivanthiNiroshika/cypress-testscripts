describe("Test subscription in cart page", () => {
  it("Verify subscription in cart page", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    // Click 'Cart' button
    cy.get("header[id='header'] li:nth-child(3)").click();
    // Scroll down to footer
    cy.scrollTo("bottom");
    // Verify text 'SUBSCRIPTION'
    cy.get("div[class='single-widget'] h2").contains("Subscription");
    // Enter email address in input and click arrow button
    cy.get("#susbscribe_email").type("testemail@gmail.com");
    cy.get(".fa.fa-arrow-circle-o-right").click();
    // Verify success message 'You have been successfully subscribed!' is visible

    cy.get(".alert-success.alert").should(
      "have.text",
      "You have been successfully subscribed!"
    );
  });
});
