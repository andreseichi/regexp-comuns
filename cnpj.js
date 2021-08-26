// Seleciona dígitos numéricos com sequência de 2 (\d{2})
// Seleciona OU - OU . ([-.]), sendo estes opcionais (?)
// Seleciona dígitos numéricos com sequência de 3 (\d{3})
// Seleciona OU - OU . ([-.]), sendo estes opcionais (?)
// Agrupa esses 3 dígitos e a seleção de . ou - com sequência de 2 (\d{3}[-.]?){2}
// Ignora a captura desse grupo (?:)
// Seleciona /, sendo opcional (?)
// Seleciona dígitos numéricos com sequência de 4 (\d{4})
// Seleciona OU - OU . ([-.]), sendo estes opcionais (?)
// Seleciona dígitos numéricos com sequência de 2 (\d{2})
// Flag global g para pegar não apenas o primeiro match
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[/]?\d{4}[-.]?\d{2}/g;

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
  '00.000.000 0000.00',
  '99-080.0084000.00',
  '9999999999999988123',
];

for (cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexpCNPJ));
}
