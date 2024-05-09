// Função para exibir informações sobre cada classe de personagem
function exibirInfoClasse(classe) {
    switch (classe) {
        case "Guerreiro":
            console.log("Classe: arqueiros");
            console.log("Descrição: Os arqueiros sao lutadores estrategistas e inteligentes lutam sempre com um plano.");
            console.log("Habilidades: chuva de flechas, flecha venenosa.");
            break;
        case "Mago":
            console.log("Classe: Bardo");
            console.log("Descrição: Os bardos são animados e belos suportes suas musica podem curar os aliados e evoluir os poderes deles.");
            console.log("Habilidades: musica curadora, musica evolutiva.");
            break;
        case "Ladino":
            console.log("Classe: Lutador");
            console.log("Descrição: Os lutadores sao capazes de realizar ataques fortes capazes de nocautear um inimigo em um ataque .");
            console.log("Habilidades: ataque unico e, vida maxima.");
            break;
        default:
            console.log("Classe não reconhecida. Escolha entre arqueiro, bardo ou Lutador.");
    }
}

// Chamando a função e passando como parâmetro "Bardo"
exibirInfoClasse("Bardo");