// src/components/Exponentiation.js
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
    "-": "⁻"
  };
  return String(exp)
    .split("")
    .map((c) => map[c] || c)
    .join("");
}

function Exponentiation() {
  const [base, setBase] = useState("");
  const [expoente, setExpoente] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseNum = parseFloat(base);
    const expNum = parseInt(expoente, 10);
    if (isNaN(baseNum) || isNaN(expNum)) {
      setMensagem("Valores inválidos");
      return;
    }
    const result = Math.pow(baseNum, expNum);
    // Exibe no formato: 2³ = 8
    setResultado(`${baseNum}${toSuperscript(expNum)} = ${result}`);
    setMensagem("");
  };

  const handleReset = () => {
    setBase("");
    setExpoente("");
    setResultado(null);
    setMensagem("");
  };

  return (
    <div className="container">
      <h2>Potenciação</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Base:</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expoente:</label>
          <input
            type="number"
            value={expoente}
            onChange={(e) => setExpoente(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular</button>
        <button type="button" onClick={handleReset}>
          Resetar
        </button>
      </form>
      {mensagem && <p className="error">{mensagem}</p>}
      {resultado && (
        <div className="result">
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}

export default Exponentiation;
