# Desafio: Classificador de Nível de Herói

Este programa em JavaScript classifica o nível de um herói com base em sua pontuação de XP (pontos de experiência).

## Como funciona

O usuário informa o nome do herói e o valor de XP. O programa então classifica o herói em um dos seguintes níveis:

- **Ferro:** 0 a 1000 XP
- **Bronze:** 1001 a 2000 XP
- **Prata:** 2001 a 5000 XP
- **Ouro:** 5001 a 7000 XP
- **Diamante:** 7001 a 8000 XP
- **Ascendente:** 8001 a 9000 XP
- **Imortal:** 9001 a 10000 XP
- **Radiante:** acima de 10000 XP

Ao final, o programa exibe a mensagem com o nome do herói e seu nível correspondente.

## Como executar

1. Certifique-se de ter o Node.js instalado.
2. Instale o pacote `prompt-sync` (caso não tenha):
   ```
   npm install prompt-sync
   ```
3. Execute o programa:
   ```
   node DesafioClassificadorNivelHeroi.js
   ```

4. Siga as instruções no terminal para inserir o nome e o XP do herói.

## Exemplo de uso

```
Digite o nome do herói: Arthur
Digite o XP do herói: 3500
O herói Arthur é do nível Prata.
```
