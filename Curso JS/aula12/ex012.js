var agora = new Date() //Serve para pegar a hora atual do sistema
var hora = agora.getHours()
var minuto = agora.getMinutes()

console.log(`Agora são ${hora} horas e ${minuto} minutos.`)

if (hora >= 5 && hora <= 12){
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18 ){
    console.log("Boa tarde!")
} else{
    console.log('Boa noite!')
}