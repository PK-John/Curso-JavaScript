let num = [5, 8, 2, 9, 3]

num.push(1) // Adiciona no final do vetor(array)
num[2] = 7 // Adiciona em um local especifico do vetor(array)
console.log(`O tamanho do vetor é ${num.length}.`) // Lê o tamanho do vetor(array)
num.sort() // Coloca todos no vetor em ordem crescente
let pos = num.indexOf(7) // Procura valores dentro do vetor(array). -1 para valores não encontrados

console.log(`Nosso vetor é o ${num}`)
console.log(`O valor 7 está na posição ${pos}`)