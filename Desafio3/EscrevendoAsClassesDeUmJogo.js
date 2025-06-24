//# 3️⃣ Escrevendo as classes de um Jogo

//O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//- Funções
//- Classes e Objetos

//## Objetivo:

//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

//- nome
//- idade
//- tipo (ex: guerreiro, mago, monge, ninja )

//além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

//- exibir a mensagem: "o {tipo} atacou usando {ataque}")
//- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
//- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

//## Saída

//Ao final deve se exibir uma mensagem:

//- "o {tipo} atacou usando {ataque}"
 // ex: mago atacou usando magia
//  guerreiro atacou usando espada
 
prompt = require('prompt-sync')();

class heroi {
    constructor(nome,idade,tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        if (this.idade <= 0) {
            throw new Error('Idade inválida');
        }
        if (this.nome === '') {
            throw new TypeError('Nome inválido');
        }
        if (this.tipo === '') {
            throw new TypeError('Tipo inválido');
        }
    }

    escrever(){
        console.log(`O heroi de nome ${this.nome}, idade ${this.idade} e tipo ${this.tipo} foi criado com sucesso!`);
    }
    atacar() {
        let ataque;
        switch (this.tipo){
            case 'mago':
                ataque = 'usou magia'
                break;
            case 'guerreiro':
                ataque = 'usou espada'
                break;
            case 'monge':
                ataque = 'usou artes marciais'
                break;
            case 'ninja':
                ataque = 'usou shuriken'
                break;
            default:        
                ataque = 'usou um ataque desconhecido';
        }
        console.log(`O heroi de nome ${this.nome} do tipo ${this.tipo} atacou e ${ataque}`);
    }
    
    
}

let nome = prompt('Digite o nome do herói:');
let idade = parseInt(prompt('Digite a idade do herói:'));
let tipo = prompt('Digite o tipo do herói (mago, guerreiro, monge, ninja):');


let heroi1 = new heroi(nome, idade, tipo);

heroi1.escrever();
console.log('---------------------');
heroi1.atacar();