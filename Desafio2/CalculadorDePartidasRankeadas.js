prompt = require('prompt-sync')();
// Desafio: Calculador de Partidas Rankeadas
function calcularPartidasRankeadas(nome,vitorias,derrotas) {
    let nomeHeroi = String(nome);
    let vitoriasHeroi = Number(vitorias);
    let derrotasHeroi = Number(derrotas);
    let calculo = vitoriasHeroi - derrotasHeroi;
    let nivelHeroi = "";
    if (calculo <=10){
        nivelHeroi = "Ferro";
    }
    else if (calculo <=20){
        nivelHeroi = "Bronze";
    }
    else if (calculo <=50){
        nivelHeroi = "Prata";
    }
    else if (calculo <=80){
        nivelHeroi = "Ouro";
    }
    else if (calculo <=90){
        nivelHeroi = "Diamante";
    }
    else if (calculo <=100){
        nivelHeroi = "Lendário";
    }
    else if (calculo >=101){
        nivelHeroi = "Imortal";
    }
    else {
        nivelHeroi = console.error("Erro: Insira um número válido de vitórias e derrotas.");
    }
    console.log(`O herói ${nomeHeroi} é do nível ${nivelHeroi}.`);
}


let nome = String(prompt("Digite o nome do herói: "));

let vitorias = Number(prompt("Digite o número de vitórias: "));

let derrotas = Number(prompt("Digite o número de derrotas: "));
calcularPartidasRankeadas(nome, vitorias, derrotas);