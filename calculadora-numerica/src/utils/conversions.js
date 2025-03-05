// Função para converter binário para decimal
function binarioParaDecimal(binario) {
  return parseInt(binario, 2);
}

// Função para converter binário para octal
function binarioParaOctal(binario) {
  const decimal = binarioParaDecimal(binario);
  return decimal.toString(8);
}

// Função para converter binário para hexadecimal
function binarioParaHexadecimal(binario) {
  const decimal = binarioParaDecimal(binario);
  return decimal.toString(16).toUpperCase();
}

// Função para converter decimal para binário
function decimalParaBinario(decimal) {
  return parseInt(decimal, 10).toString(2);
}

// Função para converter decimal para octal
function decimalParaOctal(decimal) {
  return parseInt(decimal, 10).toString(8);
}

// Função para converter decimal para hexadecimal
function decimalParaHexadecimal(decimal) {
  return parseInt(decimal, 10).toString(16).toUpperCase();
}

// Função para converter octal para decimal
function octalParaDecimal(octal) {
  return parseInt(octal, 8);
}

// Função para converter octal para binário
function octalParaBinario(octal) {
  const decimal = octalParaDecimal(octal);
  return decimal.toString(2);
}

// Função para converter octal para hexadecimal
function octalParaHexadecimal(octal) {
  const decimal = octalParaDecimal(octal);
  return decimal.toString(16).toUpperCase();
}

// Função para converter hexadecimal para decimal
function hexadecimalParaDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16);
}

// Função para converter hexadecimal para binário
function hexadecimalParaBinario(hexadecimal) {
  const decimal = hexadecimalParaDecimal(hexadecimal);
  return decimal.toString(2);
}

// Função para converter hexadecimal para octal
function hexadecimalParaOctal(hexadecimal) {
  const decimal = hexadecimalParaDecimal(hexadecimal);
  return decimal.toString(8);
}

export {
  binarioParaDecimal,
  binarioParaOctal,
  binarioParaHexadecimal,
  decimalParaBinario,
  decimalParaOctal,
  decimalParaHexadecimal,
  octalParaDecimal,
  octalParaBinario,
  octalParaHexadecimal,
  hexadecimalParaDecimal,
  hexadecimalParaBinario,
  hexadecimalParaOctal
};