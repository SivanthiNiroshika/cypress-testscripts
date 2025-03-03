import { faker } from "@faker-js/faker";

describe("Test place order and register while checkout", () => {
  it("Verify place order and register while checkout", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    // Add products to cart
    cy.get("a[href='/products']").click();

    //Click 'View Product' for any product on home page
    cy.contains("View Product").click();
    // Click 'Add to cart' button
    cy.get("button[type='button']").click();
    // Click 'View Cart' button
    cy.contains("View Cart").click();

    // Verify that cart page is displayed
    cy.contains("Shopping Cart");
    // Click Proceed To Checkout
    cy.get(".btn.btn-default.check_out").click();
    // Click 'Register / Login' button
    // cy.get('.container').find('.modal-body > :nth-child(2) > a > u').click();

    cy.get(".container").find("a").contains("Register / Login").click();

    // Fill all details in Signup and create account
    // Enter name and email address
    const name1 = "Shivanthi";
    cy.get("input[placeholder='Name']").type(name1);
    const randomEmail = faker.internet.email();

    cy.get("input[data-qa='signup-email']").type(randomEmail);

    //Click 'Signup' button
    cy.get("button[data-qa='signup-button']").click();

    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains("Enter Account Information");

    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender2").check();
    const name2 = "Niroshika";
    cy.get("#name").type(name2);
    cy.get("#password").type("test@123");
    cy.get("#days").select("1");
    cy.get("#months").select("February");
    cy.get("#years").select("1984");

    //Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").check();

    //Select checkbox 'Receive special offers from our partners!'
    cy.get("#optin").check();

    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    const firstName = "Shiv";
    cy.get("#first_name").type(firstName);
    const lastName = "Niroshika";
    cy.get("#last_name").type(lastName);

    cy.get("#company").type("ABC");

    cy.get("#address1").type("15 FOXHILL AVENUE, ATHELSTONE");

    cy.get("#address2").type("test");

    cy.get("#country").select("Australia");

    cy.get("#state").type("SA");

    cy.get("#city").type("ATHELSTONE");

    cy.get("#zipcode").type("5076");

    cy.get("#mobile_number").type("+613203456");

    //Click 'Create Account button'
    cy.get("button[data-qa='create-account']").click();

    //Verify that 'ACCOUNT CREATED!' is visible

    cy.contains("Account Created!");

    // Verify ' Logged in as username' at top
    cy.get('[data-qa="continue-button"]').click();

    // Click 'Cart' button
    cy.contains("a", "Cart").click();

    // Click 'Proceed To Checkout' button
    cy.get(".btn.btn-default.check_out").click();
    // Verify Address Details and Review Your Order
    cy.contains("h2", "Address Details");
    cy.get("#address_delivery > .address_title > .page-subheading").should(
      "be.visible"
    );
    cy.get("#address_invoice > .address_title > .page-subheading").should(
      "be.visible"
    );
    cy.get(":nth-child(4) > .heading").should("be.visible");
    cy.get(":nth-child(7) > .btn").should("be.visible");
    // Enter description in comment text area and click 'Place Order'
    cy.get("textarea[name='message']").type("Test description");
    cy.get(".btn.btn-default.check_out").click();
    // Enter payment details: Name on Card, Card Number, CVC, Expiration date
    cy.get(".heading").contains("Payment");
    cy.get('[data-qa="name-on-card"]').type("Test Name");
    cy.get("input[name='card_number']").type("4242424242424242");
    cy.get("input[placeholder='ex. 311']").type("123");
    cy.get("input[placeholder='MM']").type("11");
    cy.get(" input[placeholder='YYYY']").type("2028");

    // Click 'Pay and Confirm Order' button
    cy.get("#submit").click();
    // Verify success message 'Your order has been placed successfully!'

    cy.contains("Order Placed!");
    cy.contains("Congratulations! Your order has been confirmed!");
  });
});
