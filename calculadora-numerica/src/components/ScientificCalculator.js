import React, { useState } from 'react';

function fromScientificNotation(coefficient, exponent) {
  return coefficient * Math.pow(10, exponent);
}

function toScientificNotation(value) {
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const coefficient = value / Math.pow(10, exponent);
  return `${coefficient.toFixed(2)}e${exponent}`;
}

const ScientificCalculator = () => {
  const [coef1, setCoef1] = useState('');
  const [exp1, setExp1] = useState('');
  const [coef2, setCoef2] = useState('');
  const [exp2, setExp2] = useState('');
  const [operation, setOperation] = useState('add');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleCalculate = () => {
    const num1 = fromScientificNotation(parseFloat(coef1), parseInt(exp1, 10));
    const num2 = fromScientificNotation(parseFloat(coef2), parseInt(exp2, 10));
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      setMensagem('Valores inválidos');
      return;
    }

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          setMensagem('Divisão por zero não é permitida');
          return;
        }
        result = num1 / num2;
        break;
      default:
        setMensagem('Operação inválida');
        return;
    }

    setResultado(toScientificNotation(result));
    setMensagem('');
  };

  const handleReset = () => {
    setCoef1('');
    setExp1('');
    setCoef2('');
    setExp2('');
    setOperation('add');
    setResultado(null);
    setMensagem('');
  };

  return (
    <div className="container">
      <h2>Calculadora de Notação Científica</h2>
      <div className="form-group">
        <label>Coeficiente 1:</label>
        <input
          type="number"
          value={coef1}
          onChange={(e) => setCoef1(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Expoente 1:</label>
        <input
          type="number"
          value={exp1}
          onChange={(e) => setExp1(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Coeficiente 2:</label>
        <input
          type="number"
          value={coef2}
          onChange={(e) => setCoef2(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Expoente 2:</label>
        <input
          type="number"
          value={exp2}
          onChange={(e) => setExp2(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Operação:</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Soma</option>
          <option value="subtract">Subtração</option>
          <option value="multiply">Multiplicação</option>
          <option value="divide">Divisão</option>
        </select>
      </div>
      <button type="button" onClick={handleCalculate}>
        Calcular
      </button>
      <button type="button" onClick={handleReset}>
        Resetar
      </button>
      {mensagem && <p className="error">{mensagem}</p>}
      {resultado && <p>O resultado é: {resultado}</p>}
    </div>
  );
};

export default ScientificCalculator;