describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-e2e="0"]').click();
    cy.get('[data-e2e="1"]').click();
    cy.get('[data-e2e="4"]').click();
    cy.get('[data-e2e="8"]').click();
    cy.get('[data-e2e="5"]').click();
    cy.get('[data-e2e="3"]').click();
    cy.get('[data-e2e="6"]').click();
    cy.get('[data-e2e="2"]').click();
    cy.get('[data-e2e="7"]').click();
    /* ==== End Cypress Studio ==== */
  });
});
