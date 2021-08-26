// Seleciona a abertura da tag (<)
// Seleciona o sinal de fechamento da tag (\/), sendo opcional
// Seleciona sequência de caracteres, espaço em branco, =, " e '
// Seleciona o sinal de fechamento da tag (\/), sendo opcional
// Seleciona o fechamento da tag (>)
// Flag global g para pegar não apenas o primeiro match
// Flag global i para ser case insensitive
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>',
];

for (tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}
