import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [operacion, setOperacion] = useState('');

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
        setOperacion('+');
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
        setOperacion('-');
    };

    const handleMultiplicar = () => {
        const producto = parseFloat(num1) * parseFloat(num2);
        setResultado(producto);
        setOperacion('×');
    };

    const handleDividir = () => {
        if (parseFloat(num2) === 0) {
            setResultado('Error: No se puede dividir por cero');
        } else {
            const division = parseFloat(num1) / parseFloat(num2);
            setResultado(division);
        }
        setOperacion('÷');
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
        setOperacion('');
    };

    return (
        <div className="calculadora">
            <h1>Calculadora Básica</h1>
            <div className="inputs">
                <input
                    type="number"
                    placeholder="Primer número"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />
                <span className="operador">{operacion}</span>
                <input
                    type="number"
                    placeholder="Segundo número"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            
            <div className="botones">
                <button onClick={handleSumar}>+</button>
                <button onClick={handleRestar}>-</button>
                <button onClick={handleMultiplicar}>×</button>
                <button onClick={handleDividir}>÷</button>
                <button className="limpiar" onClick={handleLimpiar}>Limpiar</button>
            </div>
            
            {resultado !== null && (
                <div className="resultado">
                    <h3>Resultado: {resultado}</h3>
                </div>
            )}
        </div>
    );
};

export default Calculadora;