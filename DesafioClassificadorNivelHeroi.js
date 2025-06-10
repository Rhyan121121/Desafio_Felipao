script = require('prompt-sync')();
// Desafio: Classificador de Nível de Herói
// Descrição: Crie um programa que classifique o nível de um herói baseado em seu XP (pontos de experiência).
// Níveis:
// - Ferro: 0 a 1000 XP
// - Bronze: 1001 a 2000 XP
// - Prata: 2001 a 5000 XP
// - Ouro: 5001 a 7000 XP
// - Diamante: 7001 a 8000 XP   
// - Ascendente: 8001 a 9000 XP
// - Imortal: 9001 a 10000 XP
// - Radiante: acima de 10000 XP


let nome = script("Digite o nome do herói: ");
let xp = script("Digite o XP do herói: ");
let NivelFinal = "";
if (xp<=1000) {
    NivelFinal = "Ferro";
}
else if (xp<=2000) {
    NivelFinal = "Bronze";
}
else if (xp<=5000) {
    NivelFinal = "Prata";
}
else if (xp<=7000) {
    NivelFinal = "Ouro";
}
else if (xp<=8000) {
    NivelFinal = "Diamante";
}
else if (xp<=9000) {
    NivelFinal = "Ascendente";
}
else if (xp<=10000) {
    NivelFinal = "Imortal";
}
else if (xp>10000) {
    NivelFinal = "Radiante";
}
else {
    NivelFinal = "Nível desconhecido";
    console.log("Insira um valor válido de XP.");
}

console.log("O herói " + nome + " é do nível " + NivelFinal + ".");