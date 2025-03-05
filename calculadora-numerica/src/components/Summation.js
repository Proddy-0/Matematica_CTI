import React, { useState } from 'react';

const Summation = () => {
  const [numElements, setNumElements] = useState(1);
  const [data, setData] = useState([{ x: '' }]);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const handleNumElementsChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumElements(num);
    setData(Array.from({ length: num }, () => ({ x: '' })));
  };

  const handleDataChange = (index, value) => {
    const newData = [...data];
    newData[index].x = value;
    setData(newData);
  };

  const handleCalculate = () => {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);

    if (isNaN(startNum) || isNaN(endNum) || startNum > endNum || startNum < 1 || endNum > numElements) {
      setMessage('Valores inválidos');
      return;
    }

    let sum = 0;
    try {
      for (let i = startNum - 1; i < endNum; i++) {
        const value = parseFloat(data[i].x);
        if (isNaN(value)) {
          setMessage('Valores inválidos');
          return;
        }
        sum += value;
      }
      setResult(sum);
      setMessage('');
    } catch (error) {
      setMessage('Erro ao calcular o somatório');
    }
  };

  const handleReset = () => {
    setNumElements(1);
    setData([{ x: '' }]);
    setStart('');
    setEnd('');
    setResult(null);
    setMessage('');
  };

  return (
    <div className="container">
      <h2>Somatório</h2>
      <div className="form-group">
        <label>Quantidade de elementos:</label>
        <input
          type="number"
          value={numElements}
          onChange={handleNumElementsChange}
          min="1"
          required
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>x</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="number"
                    value={row.x}
                    onChange={(e) => handleDataChange(index, e.target.value)}
                    required
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="form-group">
        <label>Início (i):</label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          min="1"
          max={numElements}
          required
        />
      </div>
      <div className="form-group">
        <label>Fim (n):</label>
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          min="1"
          max={numElements}
          required
        />
      </div>
      <div className="summation-symbol">
        <div className="summation-top">{end}</div>
        <div className="summation-middle">∑</div>
        <div className="summation-bottom">i={start}</div>
        <div className="summation-term">x</div>
      </div>
      <button type="button" onClick={handleCalculate}>
        Calcular
      </button>
      <button type="button" onClick={handleReset}>
        Resetar
      </button>
      {message && <p className="error">{message}</p>}
      {result !== null && <p>O resultado do somatório é: {result}</p>}
    </div>
  );
};

export default Summation;