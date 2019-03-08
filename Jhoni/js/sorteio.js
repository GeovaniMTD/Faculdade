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

        var JSONreadyUsers = JSON.stringify(num);
        localStorage.setItem('num', JSONreadyUsers);

        var listahtml = document.getElementById("lista").innerHTML;
        listahtml = listahtml + "<li>" + numeroSorteado + "</li>";
        document.getElementById("lista").innerHTML = listahtml;

        return numeroSorteado

    }
   
    return {
        criarArray: criarArray,
        sortear: sortear
    }
})
()

// Desafio
// Escrever os numeros já sorteados
// Não deichar repitir o mesmo numero
// Dicas: MAP, REDUCER, Filter
// Dica: LocalStorage