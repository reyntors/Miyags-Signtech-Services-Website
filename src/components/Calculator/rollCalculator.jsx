import React, { useState } from 'react';
import './rollCalculator.css';

const Calculator = () => {
    const [pageSize, setPageSize] = useState('3');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [lengthConsumed, setLengthConsumed] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        if (height && width) {
            const length = (parseFloat(height) * parseFloat(width)) / parseFloat(pageSize);
            setLengthConsumed(length.toFixed(2));
        }
    };

    return (
        <section id="calculator">
            <h1>Rolls Calculator</h1>
            <form onSubmit={handleCalculate}>
                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    {[3, 4, 5, 6, 7, 8, 9, 10].map(size => (
                        <option key={size} value={size}>{size} ft</option>
                    ))}
                </select>
                <input 
                    type="number" 
                    placeholder='Enter height' 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='Enter width' 
                    value={width} 
                    onChange={(e) => setWidth(e.target.value)}
                />
                <button type="submit">Calculate</button>
            </form>
            {lengthConsumed !== null && (
                <p>Length Consumed: {lengthConsumed} ft</p>
            )}
        </section>
    );
};

export default Calculator;
