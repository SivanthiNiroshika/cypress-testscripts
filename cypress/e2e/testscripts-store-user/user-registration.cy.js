import { faker } from '@faker-js/faker';



describe('Test Register user', () => {
    it('Verify user registration', () => {
        //Navigate to the web store
        cy.visit('https://automationexercise.com/')

        //Verify that home page is visible successfully
        cy.get("header[id='header'] li:nth-child(1) a:nth-child(1)").should('be.visible')

        //Click on 'Signup / Login' button
        cy.get("a[href='/login']").click()

        //Verify 'New User Signup!' is visible
        cy.contains("New User Signup!")

        // Enter name and email address
        const name1="Shivanthi"
        cy.get("input[placeholder='Name']").type(name1)
        const randomEmail = faker.internet.email();

        cy.get("input[data-qa='signup-email']").type(randomEmail)

        //Click 'Signup' button
        cy.get("button[data-qa='signup-button']").click()

        //Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.contains("Enter Account Information")

        // Fill details: Title, Name, Email, Password, Date of birth
        cy.get("#id_gender2").check()
        const name2="Niroshika"
        cy.get("#name").type(name2)
        cy.get("#password").type("test@123")
        cy.get("#days").select("1")
        cy.get("#months").select("February")
        cy.get("#years").select("1984")

 
        //Select checkbox 'Sign up for our newsletter!'
        cy.get('#newsletter').check()
    

        //Select checkbox 'Receive special offers from our partners!'
        cy.get("#optin").check()

        // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        const firstName ="Shiv"
        cy.get("#first_name").type(firstName)
        const lastName ="Niroshika"
        cy.get("#last_name").type(lastName)

        cy.get("#company").type("ABC")

        cy.get("#address1").type("15 FOXHILL AVENUE, ATHELSTONE")

        cy.get("#address2").type("test")

        cy.get("#country").select("Australia")

        cy.get("#state").type("SA")

        cy.get("#city").type("ATHELSTONE")

        cy.get("#zipcode").type("5076")

        cy.get("#mobile_number").type("+613203456")

      


        //Click 'Create Account button'
        cy.get("button[data-qa='create-account']").click()

        //Verify that 'ACCOUNT CREATED!' is visible

        cy.contains("Account Created!")


        //Click 'Continue' button
        cy.get(".btn.btn-primary").click()


        //Verify that 'Logged in as username' is visible
        const fullName= name1+name2
        cy.get("ul[class='nav navbar-nav'] li a b").contains(fullName)

        // Click 'Delete Account' button
        cy.get("a[href='/delete_account']").click()

        //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
         cy.contains("Account Deleted!")

    });
});