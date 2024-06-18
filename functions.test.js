
//Importo la función que voy a testear.

const checkDni = require("./functions");
//////////////////////////////////////

describe("test DNI basic", () => {
    test("returns true or false", () => {
      const result = checkDni();
      expect(result === "DNI correcto" || result === "DNI incorrecto").toBeTruthy();
    });
    
  });
