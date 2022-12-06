describe("Twitter", () => {
  it("Deberia poder ver la publicación en la lista de publicaciones.", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Hola mundo");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "Hola mundo");
  });
});
