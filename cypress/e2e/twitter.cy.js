describe("Twitter", () => {
  it("Deberia poder ver la publicación en la lista de publicaciones.", () => {
    cy.visit("/");
    cy.get("#publicacion").type("Hola mundo");
    cy.get("#publicar-button").click();
    cy.get("#resultado-div").should("contain", "Hola mundo");
  });
  it("Deberia mostrarse un mensaje: No se puede ingresar un post sin Texto enla parte superior de la lista de publicaciones. ", () => {
    cy.visit("/");
    cy.get("#publicacion").type(" ");
    cy.get("#publicar-button").click();
    cy.get("#advertencia-div").should("contain", "No se puede ingresar un post sin Texto");
  });

});
