describe("Test contact us form submit", () => {
  it("Verify contact us form submission", () => {
    //Navigate to url 'http://automationexercise.com'
    cy.visit("https://automationexercise.com/");

    //Verify that home page is visible successfully
    cy.contains("Home");

    //Click on 'Contact Us' button
cy.get("a[href='/contact_us']").click()
    //Verify 'GET IN TOUCH' is visible
cy.contains("Get In Touch")
    //Enter name, email, subject and message
cy.get("input[placeholder='Name']").type("test1")
cy.get("input[placeholder='Email']").type("test2@mail.com")
cy.get("input[placeholder='Subject']").type("test2")
cy.get("#message").type("test3")
    //Upload file
cy.get("input[name='upload_file']").selectFile('cypress/fixtures/example.json')
    //Click 'Submit' button
cy.get("input[value='Submit']").click()
    //Click OK button
    cy.on('window:confirm', (str) => {
     
    expect(str).to.eq("Press OK to proceed!")
    return true;

    })
    //Verify success message 'Success! Your details have been submitted successfully.' is visible
    
    //Click 'Home' button and verify that landed to home page successfull
  });
});
