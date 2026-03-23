# proyecto-ci-cd

![CI Pipeline](https://github.com/jnreyes2020x/proyecto-ci-cd/actions/workflows/ci.yml/badge.svg)

Proyecto Node.js con pipeline CI/CD usando GitHub Actions, Jest y ESLint.

## Funciones implementadas

- `sumar(a, b)` — Suma dos números
- `factorial(n)` — Calcula el factorial
- `esPalindromo(texto)` — Verifica si es palíndromo
- `calcularPromedio(numeros)` — Calcula el promedio de un arreglo

## Instalación
```bash
npm install
```

## Ejecución local
```bash
npm test
npm run lint
```

## Pipeline CI/CD

1. **lint** — Valida estilo con ESLint
2. **test** — Corre pruebas en Node.js 18 y 20
3. **build** — Valida que el módulo carga correctamente

## Fuente

GitHub Docs. (2024). *Understanding GitHub Actions*.
https://docs.github.com/en/actions/about-github-actions/understanding-github-actions