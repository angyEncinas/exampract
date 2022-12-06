import dividirFrase from "./clasificador.js";

describe("dividirPalabra", () => {
  it("deberia devolverme 1 con palabra pequeña", () => {
    expect(dividirFrase("Hola")).toEqual("Hola: 1  ");
  });
  it("deberia contar 2 palabra pequeña", () => {
    var resultados = dividirFrase("Hola yo");
    expect(resultados).toEqual("Hola: 1  yo: 1  ");
  });
  it("deberia contar 2 palabra pequeña repetida", () => {
    var resultados = dividirFrase("Hola Hola");
    expect(resultados).toEqual("Hola: 2  ");
  });
  it("deberia contar 2 palabra grande repetida", () => {
    var resultados = dividirFrase("Hola Hola si yo yo");
    expect(resultados).toEqual("Hola: 2  si: 1  yo: 2  ");
  });
});
