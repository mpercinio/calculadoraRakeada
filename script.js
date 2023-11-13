/* Coloquei a mensagem  como pediram mas fiz uma alteração pois não tinha o nome do jogador 
e na minha não adianta você dizer a quantidade de vitorias e o nivel sem saber o nome do 
jogador.
*/
let jogador = "thebest";

let sub;

function subtration(victory, defeat) {
    sub = victory - defeat;
    return sub;
}

let result = subtration(300, 195);

let nivel;

switch (true) {

    case result <= 10:
        nivel = "Ferro";
        break

    case result <= 20:
        nivel = "Bronze";
        break

    case result <= 50:
        nivel = "Prata";
        break

    case result <= 80:
        nivel = "Ouro";
        break

    case result <= 90:
        nivel = "Diamante"
        break

    case result <= 100:
        nivel = "Lendário";
        break
    
    case result > 100:
        nivel = "Imortal";
        break
}

console.log(`O Herói  ${jogador}  tem saldo de ${sub} está no nível de ${nivel}`);
