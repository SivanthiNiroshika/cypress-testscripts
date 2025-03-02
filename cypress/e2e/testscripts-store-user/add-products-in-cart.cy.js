describe("Test add products in cart", () => {
  it("Test add products in cart", () => {
    let firstProduct;
    let secondProduct;

    // Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    // Verify that home page is visible successfully
    cy.contains("Home");

    // Click 'Products' button
    cy.get("a[href='/products']").click();

    // Hover over first product and click 'Add to cart'
    cy.get(".product-image-wrapper")
      .first()
      .within(() => {
        cy.get("p")
          .invoke("text")
          .then((text) => {
            firstProduct = text.trim();
            const firstTwoWords = firstProduct.split(" ").slice(0, 2).join(" "); // Get first two words
            cy.log(`First product: ${firstTwoWords}`);
            firstProduct = firstTwoWords; // Store first two words back into firstProduct
          });
        cy.contains("Add to cart").click();
      });

    // Click 'Continue Shopping' button
    cy.get(".btn.btn-success.close-modal.btn-block").click();

    // Hover over second product and click 'Add to cart'
    cy.get(".product-image-wrapper")
      .eq(1)
      .within(() => {
        cy.get("p")
          .invoke("text")
          .then((text) => {
            secondProduct = text.trim();
            const firstTwoWords = secondProduct
              .split(" ")
              .slice(0, 2)
              .join(" "); // Get first two words
            cy.log(`Second product: ${firstTwoWords}`);
            secondProduct = firstTwoWords; // Store first two words back into secondProduct
          });

        cy.contains("Add to cart").click();
      });

    cy.get(".btn.btn-success.close-modal.btn-block").click();

    // Click 'View Cart' button
    cy.contains("a", "Cart").click();

    // Verify both products are added to Cart
    //   cy.get("#cart_info_table tbody tr").eq(0).within(() => {
    //     cy.get(".cart_description h4 a").should("contain", firstProduct);
    //   });

    //   cy.get("#cart_info_table tbody tr").eq(1).within(() => {
    //     cy.get(".cart_description h4 a").should("contain", secondProduct);
    //   });

    // Verify their prices, quantity and total price
    cy.get("td").should("have.class", "cart_price");
    cy.get(".cart_price").should("not.be.empty");
    cy.get("td").should("have.class", "cart_quantity");
    cy.get(".cart_quantity").should("not.be.empty");
    cy.get("td").should("have.class", "cart_total");
    cy.get(".cart_total").should("not.be.empty");
  });
});
