let vetor = [3, 2, 1, 4, 5, 6]

for(let pos = 0; pos < vetor.length; pos++){
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

for(let pos in vetor){ // Versão simplificada do "for" para vetores(arrays) e objetos
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}