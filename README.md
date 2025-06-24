# Desafios de Programação

Este repositório contém desafios de lógica de programação em JavaScript, com foco em classificação e cálculos baseados em entrada do usuário.

---

## Desafio 1: Classificador de Nível de Herói

Classifica o nível de um herói com base em sua pontuação de XP.

### Como funciona

O usuário informa o nome do herói e o valor de XP. O programa classifica o herói em um dos seguintes níveis:

- **Ferro:** 0 a 1000 XP
- **Bronze:** 1001 a 2000 XP
- **Prata:** 2001 a 5000 XP
- **Ouro:** 5001 a 7000 XP
- **Diamante:** 7001 a 8000 XP
- **Ascendente:** 8001 a 9000 XP
- **Imortal:** 9001 a 10000 XP
- **Radiante:** acima de 10000 XP

### Como executar

1. Instale o Node.js.
2. Instale o pacote `prompt-sync`:
   ```
   npm install prompt-sync
   ```
3. Execute:
   ```
   node DesafioClassificadorNivelHeroi.js
   ```

---

## Desafio 2: Calculador de Partidas Rankeadas

Calcula o saldo de vitórias e derrotas de um herói e classifica seu nível.

### Como funciona

O usuário informa o nome do herói, número de vitórias e derrotas. O programa calcula o saldo (`vitórias - derrotas`) e classifica o herói:

- **Ferro:** saldo 0 a 10
- **Bronze:** saldo 11 a 20
- **Prata:** saldo 21 a 50
- **Ouro:** saldo 51 a 80
- **Diamante:** saldo 81 a 90
- **Lendário:** saldo 91 a 100
- **Imortal:** saldo acima de 100

### Como executar

1. Instale o Node.js.
2. Instale o pacote `prompt-sync`:
   ```
   npm install prompt-sync
   ```
3. Execute:
   ```
   node Desafio2/CalculadorDePartidasRankeadas.js
   ```

---

## Desafio 3: Escrevendo as Classes de um Jogo

Crie uma classe genérica que represente um herói de uma aventura com as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que exibe a mensagem:

- "O {tipo} atacou usando {ataque}"

Onde o {ataque} depende do tipo:
- mago: usou magia
- guerreiro: usou espada
- monge: usou artes marciais
- ninja: usou shuriken

### Como executar

1. Instale o Node.js.
2. Instale o pacote `prompt-sync`:
   ```
   npm install prompt-sync
   ```
3. Execute:
   ```
   node Desafio3/EscrevendoAsClassesDeUmJogo.js
   ```

---

_Fim do README_

Agradeço por visitar este repositório! Se você gostou dos desafios ou tem sugestões, fique à vontade para abrir uma issue ou contribuir. Bons estudos e boa programação! 🚀
