var sortear = (function() {
    var numeros =[]
    var criarArray = function (inicio, fim) {
        for (var contador = inicio; contador <=fim; contador++){
            numeros.push(contador)
        }
    }
    var sortear = function (inicio, fim) {
        criarArray(inicio, fim)
        var numeroSorteado = 
        numeros [Math.floor(Math.random() * numeros.length)]
        return numeroSorteado
    }

    return {
        criarArray: criarArray,
        sortear: sortear
    }
})
()

// Desafio
// Não deichar repitir o mesmo numero
// Escrever os numeros já sorteados
// Dicas: MAP, REDUCER, Filter
// Dica: LocalStorage