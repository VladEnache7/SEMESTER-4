describe("Login Page", () => {
    it("logs in as guest", () => {
        // Visit the login page
        cy.visit("http://localhost:5173");

        // Submit the form
        cy.get('[data-testid="guest-button"]').click();

        // Check that the login was successful
        // This will depend on what your app does on successful login
        // For example, you might check that the URL has changed to the home page
        cy.url().should("include", "/movies");
    });
    it("logs in successfully", () => {
        // Visit the login page
        cy.visit("http://localhost:5173");

        // check that the input fields are present
        cy.get('[data-testid="username-input"]').should("be.visible");
        cy.get('[data-testid="password-input"]').should("be.visible");

        // Fill in the login form
        cy.get('[data-testid="username-input"]').type("test-user");
        cy.get('[data-testid="password-input"]').type("test-user");

        // Submit the form
        cy.get('[data-testid="submit-button"]').click();

        // Check that the login was successful
        // This will depend on what your app does on successful login
        // For example, you might check that the URL has changed to the home page
        cy.url().should("include", "/");
    });
});
