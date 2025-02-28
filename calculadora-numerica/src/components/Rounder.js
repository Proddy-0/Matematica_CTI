// src/components/Rounder.js
import React, { useState } from 'react';

const decimalOptions = {
  6: "Décimos",
  5: "Centésimos",
  4: "Milésimos",
  3: "Décimos de milésimos",
  2: "Centésimos de milésimos",
  1: "Milionésimos"
};

const integerOptions = {
  7: "Unidades",
  8: "Dezenas",
  9: "Centenas",
  10: "Milhares",
  11: "Dezenas de milhar",
  12: "Centenas de milhar",
  13: "Milhões"
};

function Rounder() {
  const [valor, setValor] = useState('');
  const [escolha, setEscolha] = useState('7'); // valor padrão para inteiros.
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(valor);
    const escolhaNum = parseInt(escolha);
    if (isNaN(num) || escolhaNum < 1 || escolhaNum > 13) {
      setMensagem("Opção ou valor inválido");
      return;
    }
    let valorFinal = 0;
    if (escolhaNum <= 6) {
      // Cálculo para opções decimais.
      const fator = Math.pow(10, 7 - escolhaNum);
      valorFinal = Math.floor(num * fator + 0.5);
    } else {
      // Cálculo para opções inteiras.
      const exp = escolhaNum - 7;
      const factor = Math.pow(10, exp);
      const arredondado = Math.round(num / factor) * factor;
      valorFinal = Math.floor(arredondado / factor);
    }
    // Seleciona o nome da unidade de acordo com o grupo.
    const unitName = escolhaNum <= 6 ? decimalOptions[escolhaNum] : integerOptions[escolhaNum];
    setResultado(`${valorFinal} ${unitName}`);
    setMensagem("");
  };

  return (
    <div className="container">
      <h2>Arredondamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Valor a ser arredondado:</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo de arredondamento:</label>
          <select value={escolha} onChange={(e) => setEscolha(e.target.value)}>
            <optgroup label="Decimais">
              {[...Object.keys(decimalOptions)]
                .sort((a, b) => b - a)
                .map(key => (
                  <option key={key} value={key}>
                    {decimalOptions[key]}
                  </option>
              ))}
            </optgroup>
            <optgroup label="Inteiros">
              {Object.keys(integerOptions).map(key => (
                <option key={key} value={key}>
                  {integerOptions[key]}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <button type="submit">Arredondar</button>
      </form>
      {mensagem && <p className="error">{mensagem}</p>}
      {resultado && <p className="result">O valor arredondado é: {resultado}</p>}
    </div>
  );
}

export default Rounder;
