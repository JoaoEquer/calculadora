# calculadora

Calculadora de dois operandos com as quatro operações básicas, em duas versões: web (HTML/CSS/JS) e linha de comando (C).

**Demo:** https://joaoequer.github.io/calculadora/

## Funcionalidades

**Versão web** (`index.html`, `script.js`, `style.css`):
- Dois campos numéricos e seletor de operador (`+`, `-`, `*`, `/`).
- Exibe o resultado com 2 casas decimais e uma explicação do operador usado.
- Divisão por zero tratada com mensagem.

**Versão C** (`calculadora.c`): pergunta a operação e dois números pelo terminal e imprime o resultado.

## Tecnologias

HTML, CSS, JavaScript puro e C (`stdio.h`).

## Como rodar

- Web: abra `index.html` no navegador.
- C: compile e execute, por exemplo com GCC:
  ```
  gcc calculadora.c -o calculadora
  ./calculadora
  ```

## Estrutura

```
index.html, script.js, style.css   versão web
calculator-solid.svg               ícone da aba
calculadora.c                      versão em C
```

## Limitações conhecidas

- Na versão web, entradas inválidas ou divisão por zero geram texto em vez de número, e o `toFixed` aplicado ao resultado causa erro no console nesses casos (a mensagem não aparece na tela).
- Cada cálculo adiciona uma nova linha de explicação sem apagar a anterior.

## Status

Projeto de estudo/prática.