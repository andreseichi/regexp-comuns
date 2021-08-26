// Seleciona dígitos numéricos com sequência de 5 (\d{5})
// Seleciona Ou - OU espaço em branco (\s), utilizando seleção de [], além de ser opcional (?)
// Seleciona os 3 últimos dígitos numéricos (d{3})
// Flag global g para pegar não apenas o primeiro match
const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = [
  '00000-000',
  '00000 000',
  '00000000',
  '74748770',
  '68200-583',
  '5655645064',
];

for (cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}
