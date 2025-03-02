describe("Test product quantity", () => {
  it("Verify product quantity in cart", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    //Click 'View Product' for any product on home page
    cy.contains("View Product").click()
    // Verify product detail is opened
     cy.url().should('include',"product_details")
    // Increase quantity to 4
    const quantity=4
    cy.get('#quantity').clear()
    cy.get("#quantity").type(quantity)

    // Click 'Add to cart' button
    cy.get("button[type='button']").click()
    // Click 'View Cart' button
    cy.contains("View Cart").click()
    // Verify that product is displayed in cart page with exact quantity
    // cy.get(".cart_quantity_delete").each(($product) =>{
    // cy.wrap($product).click();
    // })
    cy.get('.cart_quantity').should('contain', quantity);


  });
});
