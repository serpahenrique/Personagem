import { Personagem } from "../POO20252N/Personagem";
import Prompt from "prompt-sync";

const teclado = Prompt();

const p = new Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

while (true) {

    console.log("+-----------MENU-----------+");
    console.log("|1. Treinar Poder de Ataque|");
    console.log("|2. Ver status             |");
    console.log("|3. Checkar se o Personagem está vivo             |");
    console.log("|9. Sair                   |");
    console.log("+--------------------------+");

    const escolha: number = +teclado("Escolha uma opção do menu: ")

    if (escolha === 9) {
        break;
    }
    switch (escolha) {
        case 1:
            treinarPoderAtaque(p)
            break;
        case 2:
            console.table(p);
            break;
        case 3:
            console.log(p.estahVivo()? "O personagem está vivo!" : "O personagem subiu!");    
        
        default:
            console.log("Opção inválida!")
            break;
    }

}

function treinarPoderAtaque(person: Personagem): void {
    person.treinarPoderAtaque();
}