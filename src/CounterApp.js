import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value })  => {

    const [counter, setcounter] = useState(0);

    const handleAdd = (e) => { 
        setcounter((c) => c + 1);
    }

    const handleSubstract = () => setcounter((c) => c - 1);
    
    const handleReset = () => { 
        setcounter((c) => c = 0);
    }

    return  (
    <>
        <h1>CounterApp</h1>
        <h2>{ counter } </h2>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
    );
}

CounterApp.propTypes = { 
    value: PropTypes.number
}



export default CounterApp;