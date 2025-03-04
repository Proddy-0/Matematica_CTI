import React, { useState, useEffect } from 'react';
import {
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
} from '../utils/conversions';

const Converter = () => {
  const [input, setInput] = useState('');
  const [base, setBase] = useState('decimal');
  const [result, setResult] = useState({});
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setResult({});
    setMensagem('');
  }, [input, base]);

  const isValidInput = (value, base) => {
    const regexMap = {
      binario: /^[01]+$/,
      decimal: /^[0-9]+$/,
      octal: /^[0-7]+$/,
      hexadecimal: /^[0-9A-Fa-f]+$/
    };
    return regexMap[base].test(value);
  };

  const handleConvert = () => {
    if (!isValidInput(input, base)) {
      setMensagem('Valor inválido para a base selecionada');
      return;
    }

    let decimalValue;
    switch (base) {
      case 'binario':
        decimalValue = binarioParaDecimal(input);
        setResult({
          decimal: decimalValue,
          octal: binarioParaOctal(input),
          hexadecimal: binarioParaHexadecimal(input)
        });
        break;
      case 'decimal':
        decimalValue = parseInt(input, 10);
        setResult({
          binario: decimalParaBinario(decimalValue),
          octal: decimalParaOctal(decimalValue),
          hexadecimal: decimalParaHexadecimal(decimalValue)
        });
        break;
      case 'octal':
        decimalValue = octalParaDecimal(input);
        setResult({
          binario: octalParaBinario(input),
          decimal: decimalValue,
          hexadecimal: octalParaHexadecimal(input)
        });
        break;
      case 'hexadecimal':
        decimalValue = hexadecimalParaDecimal(input);
        setResult({
          binario: hexadecimalParaBinario(input),
          decimal: decimalValue,
          octal: hexadecimalParaOctal(input)
        });
        break;
      default:
        break;
    }
    setMensagem('');
  };

  return (
    <div className="container">
      <h2>Conversor de Bases</h2>
      <div className="form-group">
        <label>Digite um valor:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Selecione a base:</label>
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          <option value="decimal">Decimal</option>
          <option value="binario">Binário</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
      </div>
      <button type="button" onClick={handleConvert}>
        Converter
      </button>
      {mensagem && <p className="error">{mensagem}</p>}
      <div className="result">
        {Object.keys(result).map((key) => (
          <p key={key}>
            {key}: {result[key]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Converter;