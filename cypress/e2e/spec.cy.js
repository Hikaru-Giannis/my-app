describe("My First Test", () => {
  it("X player is Winnter Test", () => {
    cy.visit("http://localhost:3001/");
    cy.get("[data-e2e=0]").click();
    cy.get("[data-e2e=1]").click();
    cy.get("[data-e2e=4]").click();
    cy.get("[data-e2e=2]").click();
    cy.get("[data-e2e=8]").click();
    cy.get("[data-e2e=status]").should("have.text", "Winner: X");
  });
});
