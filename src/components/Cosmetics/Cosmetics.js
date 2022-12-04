import React from 'react';
import { add } from '../Utilities/Calculate';
import './Cosmetics.css';

const Cosmetics = () => {
    const first = 50;
    const second = 50;
    const total = add(first,second);
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetics;