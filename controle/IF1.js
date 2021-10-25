function AlunoNota(nota) {
    if(nota >= 7){
        console.log('Aluno aprovado com a nota:' + nota)
    }
}

AlunoNota(8)
AlunoNota(9.8)

function NotaTrue(valor){
    if(valor){
        console.log('é verdade' + valor)
    }
}

NotaTrue()
NotaTrue(null)
NotaTrue(undefined)
NotaTrue(NaN)

