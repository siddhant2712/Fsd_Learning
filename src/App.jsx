import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Counter</h2>
            <div style={{ fontSize: '24px', margin: '20px' }}>
                {count}
            </div>
            <button 
                onClick={increment}
                style={{
                    padding: '10px 20px',
                    margin: '0 10px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Increment
            </button>
            <button 
                onClick={decrement}
                style={{
                    padding: '10px 20px',
                    margin: '0 10px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;
