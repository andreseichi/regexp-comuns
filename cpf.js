// Seleciona dígitos numéricos com sequência de 3 (\d{3})
// Seleciona OU . OU - ([.-]), sendo estes opcionais
// Agrupa esses 3 dígitos e a seleção de . ou - com sequência de 3 (\d{3}[.-]?){3}
// Ignora a captura desse grupo (?:)
// Seleciona dígitos numéricos com sequência de 2 (\d{2})
const regexpCPF = /(?:\d{3}[.-]?){3}\d{2}/g;

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000',
  '99999999999',
  '9876543219876542',
  '9.87-654321-982',
  '999.000-254.99',
];

for (cpf of cpfs) {
  console.log(cpf, cpf.match(regexpCPF));
}
