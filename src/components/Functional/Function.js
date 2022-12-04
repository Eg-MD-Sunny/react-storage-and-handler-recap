import React from 'react';
import { add, div, mul, sub } from '../Calculation/Calculation';

const Function = () => {
    const first = 50;
    const second = 25;
    const add_result = add(first,second);
    const sub_result = sub(first,second);
    const mul_result = mul(first,second);
    const div_result = div(first,second);
    return (
        <div>
            <h3>This is functional Page</h3>
            <p>Total Sum: {add_result} || Total Sub:{sub_result} || Total Mul:{mul_result} || Total Div:{div_result}</p>
        </div>
    );
};

export default Function;