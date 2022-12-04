import React from 'react';
import { add, multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 66;
    const second = 55;
    const total = multiply(first,second);
    const sum = add(first,second);
    return (
        <div>
            <h2>This is Shoes Compo</h2>
            <p>Result:{total} and total: {sum}</p>
        </div>
    );
};

export default Shoes;