const ImprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aluno Aprovado')
    } else{
        console.log('Aluno Reprovado')
    }
}
ImprimirResultado(10)
ImprimirResultado(3)
ImprimirResultado('uepa')
ImprimirResultado(6.9)
ImprimirResultado(NaN)