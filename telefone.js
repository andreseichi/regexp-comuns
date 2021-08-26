// Seleciona o +55, sendo opcional (?)
// Seleciona o espaço em branco (\s), sendo opcional (?)
// Agrupa todo o +55 e o espaço para ser opcional, ignorando a captura (?:\+?55\s?)?
// Seleciona (, sendo opcional
// Seleciona dígitos com sequência de 2
// Seleciona ), sendo opcional
// Seleciona OU - OU espaço em branco (\s), sendo opcional
// Agrupa os parênteses, os dígitos e o espaço em branco ou - para serem opcional e ignora a captura (?:\(?\d{2}\)?[-\s]?)?
// Seleciona 4 ou 5 dígitos (\d{4,5})
// Seleciona OU - ou espaço em branco, sendo opcional
// Seleciona 4 dígitos
// Flag global g para pegar não apenas o primeiro match
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;

const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888',
];

for (telefone of telefones) {
  console.log(telefone, telefone.match(regexpTELEFONE));
}
