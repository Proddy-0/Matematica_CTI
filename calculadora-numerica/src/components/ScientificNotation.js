// src/components/ScientificNotation.js
import React, { useState } from "react";

function toSuperscript(exp) {
  const map = {
    "0": "⁰",
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
    "-": "⁻",
  };
  return String(exp)
    .split("")
    .map((c) => map[c] || c)
    .join("");
}

function ScientificNotation() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let num = parseFloat(valor);
    if (isNaN(num)) {
      setMensagem("Valor inválido");
      return;
    }
    let contador = 0;
    if (num === 0) {
      setResultado("0 × 10⁰");
    } else {
      while (Math.abs(num) >= 10 || Math.abs(num) < 1) {
        if (Math.abs(num) >= 10) {
          num /= 10;
          contador += 1;
        } else if (Math.abs(num) < 1) {
          num *= 10;
          contador -= 1;
        }
      }
      setResultado(`${num.toFixed(2)} × 10${toSuperscript(contador)}`);
    }
    setMensagem("");
  };

  const handleReset = () => {
    setValor("");
    setResultado(null);
    setMensagem("");
  };

  return (
    <div className="container">
      <h2>Notação Científica</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Digite um valor:</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Converter</button>
        <button type="button" onClick={handleReset}>
          Resetar
        </button>
      </form>
      {mensagem && <p className="error">{mensagem}</p>}
      {resultado && <p>O valor em notação científica é: {resultado}</p>}
    </div>
  );
}

export default ScientificNotation;
