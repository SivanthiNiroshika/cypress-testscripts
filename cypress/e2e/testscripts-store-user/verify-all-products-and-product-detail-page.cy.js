describe("Test all products and product detail pages", () => {
  it("Verify all products and product detail pages", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    //Click on 'Products' button
    cy.get("a[href='/products']").click();
    //Verify user is navigated to ALL PRODUCTS page successfully
    cy.contains("All Products");
    cy.url().should("eq", "https://automationexercise.com/products");
    //The products list is visible
    cy.get(".container", { timeout: 10000 }).should("be.visible");

    //Click on 'View Product' of first product
    cy.get('.features_items').first().within(() => {

       cy.contains('View Product').click();
      });

    // cy.get(".features_items")
    //   .first()
    //   .within(() => {
    //     cy.contains("Add to cart").click();
    //   });

    //User is landed to product detail page
    cy.url().should('include',"product_details")

    //Verify that detail is visible: product name, category, price, availability, condition, brand
    cy.get("div[class='product-information'] h2").should('be.visible')

    //cy.get('p').should('contain',"Category")

    cy.get(".product-information").within(() =>{


        cy.get('p').should('contain',"Category")
        cy.get('p:contains("Category:")').should('not.be.empty'); // Verify that the category paragraph is not empty.
        cy.get('p:contains("Availability:")').should('not.be.empty')
        cy.get('p:contains("Condition:")').should('not.be.empty')
        cy.get('p:contains("Brand:")').should('not.be.empty')
        cy.get('span:contains("Rs")').should('not.be.empty')
    });

    })





});

