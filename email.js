// Seleciona sequência de caracteres, incluindo . e - ([\w-.]+)
// Seleciona o @
// Seleciona sequência de caracteres, incluindo . e - ([\w-.]+)
// Seleciona o . (\.)
// Seleciona sequência de caracteres, incluindo . e - ([\w-.]+)
// Flag global g para pegar não apenas o primeiro match
// Flag global i para ser case insensitive
const regexpEMAIL = /[\w-.]+@[\w-.]+\.[\w-.]+/gi;

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for (email of emails) {
  console.log(email, email.match(regexpEMAIL));
}
