//Titulo
console.log ("Pokemons e Atributos:")

//Criando variáveis
let poochyena = {
    nome: "Poochyena",
    nivel: 2,
    genero: "Masc",
    pontosDeVida: 13
};

let zigzagoon = {
    nome: "Zigzagoon",
    nivel: 2,
    genero: "Fem",
    pontosDeVida: 13
};

let dragonite = {
    nome: "Dragonite",
    nivel: 5,
    genero: "Masc",
    pontosDeVida: 25
};

//criando uma constante
const leonardo = "nome: leo, Idade: 22, Sexo: Masc"
const victor = "Nome: Victor, Sexo: Masc,"

let tão = {
    idade: 23,
};

let carro = {
    corsa: "corsa 2008",
    golf: "golf 2012",
};


//output
console.log("Nome: " + poochyena.nome + ", Nível: " + poochyena.nivel + ", Gênero: " + poochyena.genero, "Pontos de Vida: " + poochyena.pontosDeVida);
console.log("Nome: " + zigzagoon.nome + ", Nível: " + zigzagoon.nivel + ", Gênero: " + zigzagoon.genero, "Pontos de Vida: " + zigzagoon.pontosDeVida);
console.log("Nome: " + dragonite.nome + ", Nível:" + dragonite.nivel + ", Gênero: " + dragonite.genero, "Pontos de Vida: " + dragonite.pontosDeVida);
console.log("Cadastro feito com sucesso: "  + poochyena.nome);
console.log("Cadastro feito com sucesso: " + zigzagoon.nome);
console.log(leonardo);
console.log(victor + " Idade:" + tão.idade);
console.log("Carro: " + carro.corsa + " / " + carro.golf);


//vetores
let Nomes = ["Maria" , "julia" , "Clara" , "Eduarda"]
console.log(Nomes[1], Nomes[2]);


let Idade = [1, 2, 3, 4]
console.log("Nomes: " + Nomes + " - ", "idade: " + Idade)

//Matrizes
let alunas = [
    ["Maria" , "julia" , "Clara" , "Eduarda"],
    [17 , 22 , 24 , 12]
]
console.log("A aluna " + alunas[0][1] + " tem a idade de " + alunas[1][2] + " anos" + " e a aluna " + alunas[0][0] + " tem a idade de " + alunas[1][3] + " anos")
