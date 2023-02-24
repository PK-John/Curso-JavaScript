var dia = new Date()
var hoje = dia.getDay()

/*
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/

switch (hoje) {

    case 0: 
        console.log('Hoje é Domingo.')
        break
    
    case 1:
        console.log('Hoje é Segunda.')
        break

    case 2:
        console.log('Hoje é terça.')
        break

    case 3:
        console.log('Hoje é quarta.')
        break
    
    case 4:
        console.log('Hoje é quinta.')
        break
    
    case 5:
        console.log('Hoje é sexta.')
        break

    case 6:
        console.log('Hoje é sábado.')
        break
    }



