function sumar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Los argumentos deben ser números");
  }
  return a + b;
}

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("El argumento debe ser un entero no negativo");
  }
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function esPalindromo(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("El argumento debe ser una cadena de texto");
  }
  const limpio = texto.toLowerCase().replace(/\s+/g, "");
  return limpio === limpio.split("").reverse().join("");
}

function calcularPromedio(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Se requiere un arreglo no vacío");
  }
  if (!numeros.every((n) => typeof n === "number")) {
    throw new TypeError("Todos los elementos deben ser números");
  }
  return numeros.reduce((acc, n) => acc + n, 0) / numeros.length;
}

module.exports = { sumar, factorial, esPalindromo, calcularPromedio };