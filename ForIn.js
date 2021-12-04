const notas = [1.2, 2.3, 3.5,4.5, 5.4, 6.7, 7.3, 8.4, 9.8]
for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64,
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}