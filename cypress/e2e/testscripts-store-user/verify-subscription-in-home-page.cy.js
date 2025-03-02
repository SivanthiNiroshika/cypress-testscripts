describe("Test subscription in home page", () => {
  it("Verify subscription in home page", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    //Scroll down to footer
    cy.scrollTo("bottom");

    //Verify text 'SUBSCRIPTION'
    cy.contains("Subscription");
    //Enter email address in input and click arrow button
    cy.get("#susbscribe_email").type("test@mail.com");
    cy.get(".fa.fa-arrow-circle-o-right").click();
    //Verify success message 'You have been successfully subscribed!' is visible
    cy.get('.alert-success').should("be.visible");
    cy.get('.alert-success').should("have.text","You have been successfully subscribed!");
  });
});
