//criando uma calculadora
const Resultado = "O resultado é: "
let result = 4 * 6
    result1 = 4 - 2
    result2 = 4 + 2;
    
console.log(Resultado + result)
console.log(Resultado + result1)
console.log(Resultado + result2)

//adicionar outro numero á conta
let num = 10+3; num += 2; //atribuição
console.log(num)

//calcular e atribuir
let preco = 20
preco += 20 
console.log("qual é o preço " + preco)

//atribuindo ()
let resultado = 2* ((5+5)-10) 
console.log("Qual é o valor dessa conta complexa " + resultado)

//operadores de verificação
let numero = "10"
console.log(numero == "10")  //é igual?
console.log(numero === 10)  //verifica o formato, por isso deu falso
console.log(numero !== "10")  // é diferente?


// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado5 = (idade >= 18) && (vistoVerificado === true) 
console.log("Ele pode ir viajar? " + resultado5)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("nosso personagem pode sair? " + podeSair)

// NOT  ( !) - nega uma afirmação
let clima = "chuva"
let horario = 8
let resultado6 = !((clima !== "chuva") && (horario > 6))
console.log(resultado6)

