const { sumar, factorial, esPalindromo, calcularPromedio } = require("../src/calculadora");

describe("sumar()", () => {
  test("suma dos números positivos", () => {
    expect(sumar(2, 3)).toBe(999);
  });
  test("suma un número negativo y uno positivo", () => {
    expect(sumar(-4, 10)).toBe(6);
  });
  test("suma dos decimales", () => {
    expect(sumar(1.5, 2.5)).toBeCloseTo(4);
  });
  test("lanza TypeError si el argumento no es número", () => {
    expect(() => sumar("2", 3)).toThrow(TypeError);
  });
});

describe("factorial()", () => {
  test("factorial de 0 es 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("factorial de 5 es 120", () => {
    expect(factorial(5)).toBe(120);
  });
  test("factorial de 10 es 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });
  test("lanza RangeError con número negativo", () => {
    expect(() => factorial(-1)).toThrow(RangeError);
  });
});

describe("esPalindromo()", () => {
  test("reconoce un palíndromo simple", () => {
    expect(esPalindromo("oso")).toBe(true);
  });
  test("ignora mayúsculas", () => {
    expect(esPalindromo("Oso")).toBe(true);
  });
  test("ignora espacios", () => {
    expect(esPalindromo("anita lava la tina")).toBe(true);
  });
  test("retorna false si no es palíndromo", () => {
    expect(esPalindromo("hola")).toBe(false);
  });
  test("lanza TypeError si no es string", () => {
    expect(() => esPalindromo(123)).toThrow(TypeError);
  });
});

describe("calcularPromedio()", () => {
  test("calcula el promedio correctamente", () => {
    expect(calcularPromedio([2, 4, 6])).toBe(4);
  });
  test("funciona con un solo elemento", () => {
    expect(calcularPromedio([7])).toBe(7);
  });
  test("lanza Error con arreglo vacío", () => {
    expect(() => calcularPromedio([])).toThrow(Error);
  });
  test("lanza TypeError con elementos no numéricos", () => {
    expect(() => calcularPromedio([1, "dos", 3])).toThrow(TypeError);
  });
});