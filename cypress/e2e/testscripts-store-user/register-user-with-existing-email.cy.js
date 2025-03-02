import { faker } from "@faker-js/faker";

describe("Test user signup with an existing email", () => {
  it("Verify signup user with an existing email", () => {
    //Navigate to the web store
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should(
      "be.visible"
    );

    //Click on 'Signup / Login' button
    cy.get("a[href='/login']").click();

    //Verify 'New User Signup!' is visible
    cy.contains("New User Signup!");

    // Enter name and email address
    const name1 = "Shivanthi";
    cy.get("input[placeholder='Name']").type(name1);
    

    cy.get("input[data-qa='signup-email']").type("mailtotest@mail.com");

    //Click 'Signup' button
    cy.get("button[data-qa='signup-button']").click();

    //Verify that 'Email Address already exist!' error is visible

    cy.contains("Email Address already exist!");

    
  });
});




