Number.prototype.entre = function (inicio,fim){
    return this >= inicio && this <= fim
}

const ImprimirResultado = function (nota){
    if(nota.entre(7,10)){
        console.log('Passou Direto!!!')
    } else if(nota.entre(7,8.9)) {
        console.log('Aprovado!')
    } else if(nota.entre(4, 6.9)){
        console.log('Em Recuperação!!!')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado!!!')
    } else{
        console.log('Nota Invalida')
    }
    console.log('Esse foi seu Resultado!')
}
ImprimirResultado(10)
ImprimirResultado(6.9)
ImprimirResultado(3)