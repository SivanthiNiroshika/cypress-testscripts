describe("Test search product", () => {
  it("Verify search product functionality", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    //Click on 'Products' button
    cy.get("a[href='/products']").click();
    //Verify user is navigated to ALL PRODUCTS page successfully
    cy.contains("All Products");
    cy.url().should("eq", "https://automationexercise.com/products");

    //Enter product name in search input and click search button
    let product_name = "Dress";
    cy.get("#search_product").type(product_name);
    cy.get("#submit_search").click();
    //Verify 'SEARCHED PRODUCTS' is visible

    cy.contains("Searched Products");

    //Verify all the products related to search are visible

    cy.get(".single-products").each(($el) => {
      // Adjust the selector to target the element containing the product text (e.g., product name or description)
      cy.get("p").should("contain", product_name); // Example: Checks <p> or <h2> tags
    });
  });
});
