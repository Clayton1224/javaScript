let preco = 19.99;
let desconto = 0.1;

//usando template literals comk expressoes nmatematicas
let precoFinal = `o preco final do produto com desconto é ${preco * (1- desconto)} reais. `;
console.log(precoFinal); //saida: "o preco final do produto com desconto e de 17.99 reais"