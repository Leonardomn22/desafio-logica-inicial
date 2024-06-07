//Trabalhando com condicionais
let possuiOvos = false
let itensComprados = ""

if(possuiOvos){ //SE for verdadeiro
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados") //SENÃO
itensComprados = "Lasanha congelada"
}
console.log("item comprado: " + itensComprados)


//if,else if ,else
let nivelDeFome =  "1"

if(nivelDeFome === 1){
console.log("pouca fome")
}
else if(nivelDeFome ===2){ //SENÃO verifica SE
console.log("muita fome")
}
else{
console.log("Você comeria mais que o pica pau")
}


//ESTRUTURA SWITCH CASE
let dia = "terça"; // Você pode mudar isso para outros dias

switch (dia) {
  case "segunda"://CASO
    console.log("Dia de começar a semana com energia!");
    break;    //parar o console
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default: //mensagem generica caso os case falhem
    console.log("Final de semana! Descanse e divirta-se!");
}

//ESTRUTURA DE REPETIÇÃO
//FOR
const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//WHILE
let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);
