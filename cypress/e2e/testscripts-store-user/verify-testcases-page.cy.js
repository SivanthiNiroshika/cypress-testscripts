

describe("Test testcases page", () => {
    it("Verify testcases page", () => {
      //Navigate to url 'http://automationexercise.com'
      cy.visit("https://automationexercise.com/");
  
      //Verify that home page is visible successfully
      cy.contains("Home");
      

      //Click on 'Test Cases' button
      cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
      //Verify user is navigated to test cases page successfully
      cy.contains("Test Cases")
      cy.url().should('eq',"https://automationexercise.com/test_cases")
      cy.url().should('include',"/test_cases")
    });
  });
  