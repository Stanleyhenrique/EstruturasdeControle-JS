const ImprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
            console.log('Perfeição')
            break

        case 9:
        case 8:
            console.log('Quase Perfeito')
            break

        case 7:
            console.log('Mediano')
            break

        case 6: case 5: case 4: case 3: case 2: case 1:
            console.log('Pessimo')
        break
    default:
        console.log('Resultado invalido')
    }
}
ImprimirResultado(10)
ImprimirResultado(9)
ImprimirResultado(7)
ImprimirResultado(4)