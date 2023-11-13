let jogador = "thebest";

let result = subtration(300, 150)

function subtration(victory, defeat) {
    let sub = victory - defeat
    console.log(sub)
    return sub
}

switch (true) {

    case result <= 1000:
        console.log("O Herói de nome " + jogador + " está no nível de Ferro");
        break

    case result <= 2000:
        console.log("O Herói de nome " + jogador + " está no nível de Bronze");
        break

    case result <= 5000:
        console.log("O Herói de nome " + jogador + " está no nível de Prata");
        break

    case result <= 7000:
        console.log("O Herói de nome " + jogador + " está no nível de Ouro");
        break

    case result <= 8000:
        console.log("O Herói de nome " + jogador + " está no nível de Platina");
        break

    case result <= 9000:
        console.log("O Herói de nome " + jogador + " está no nível de Ascendente");
        break

    case result <= 10000:
        console.log("O Herói de nome " + jogador + " está no nível de Imortal");
        break
    
    case result > 10000:
        console.log("O Herói de nome " + jogador + " está no nível de Radiante");
        break
}

console.log(result)
