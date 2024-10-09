// Homem aranha, 12, ação, aventura 
// naruto, 10, ação, aventura, comédia, drama, fantasia
// demon slayer, 14, ação,  aventura, drama, fantasia 
// Madagascar, 12, animação,  comédia, aventura, família 
// one piece, 10, ação, aventura, animação, comédia
// mazaropi, livre, documentário
// os trapalhões, livre, comédia, família, nacional 
// Paulinho mixaria, livre, ação, comédia, família 
// jujutsu kaisen, 14, ação, anime, fantasia, terror
// os três pateta, 12, comédia 

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

 fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}  

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Os tres pateta";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "jujutsun kaisen";          
        } else{
         return "demon slayer";
        }
      } else {
        if (gostaDeFantasia) {
          return "mazaropi";
        } else {
          return "one piece";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "naruto";
    } else {
      return "homem aranha";
    }
  }
}


