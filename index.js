const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',

        sexo: 'F',
        salario: 3350.25,
    },
]

//1. Imprima no console a quantidade de pessoas Total.
console.log(data.length)





//2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

const result = data.filter((datas) => datas.sexo == 'F')

console.log(result.length)





//3. Imprima no console a soma do salário de todas as pessoas.

let soma = 0

for (let index = 0; index < data.length; index++) {
    soma += data[index].salario
}

console.log(soma)




//4. Imprima no console a média do salário de todas as pessoas.
let soma1 = 0
let media = 0

for (let index = 0; index < data.length; index++) {
    soma1 += data[index].salario
}

media = soma1 / data.length
console.log(media.toFixed(2))




//5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino

let somaSalarioMasculino = 0

const sexoM = data.filter((datas) => datas.sexo == "M")

for (let i = 0; i < sexoM.length; i++) {
    somaSalarioMasculino += sexoM[i].salario
}

console.log(somaSalarioMasculino);




//6. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

const salarioMaior7000 = (datas) => datas.salario > 7000 

console.log(data.some(salarioMaior7000)) //some() retorna true se tiver salarios maior de 7000




//7. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.

const pegaNomeCompleto = (datas) => datas.nome == "Eva Trindade" // procura o nome dentro do array de objetos

console.log(data.findIndex(pegaNomeCompleto))




//8. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".

const todosNomes = data.map((nomes) => nomes.nome) //pega todos os nomes do data

const pegaSobrenome = todosNomes.filter((nome) => nome.includes("Silva")) // verifica se  o sobrenome "silva" esta incluso na lista todosNomes usando o includes()

console.log(pegaSobrenome)




//9. Imprima os nomes utilizando o MAP

const imprimeNomes = data.map((nomes) => nomes.nome)

imprimeNomes.forEach(element => console.log(element))

console.log(imprimeNomes)