import React, { useState } from 'react';
import "./Counter.css";  // Import CSS file

function Counter() {

    const [count, setCount] = useState(0);

    function countUp() {
        setCount(count + 1);
    }

    function countDown() {
        setCount(count - 1);
    }

    function countReset() {
        setCount(0);
    }



    return (
        <div className="Counter">
            <h3>Counter</h3>
            <p>{count}</p>
            <p>
                <button onClick={countDown}>Down</button>
                {count !== 0 && <button onClick={countReset}>Reset</button>}
                <button onClick={countUp}>Up</button>
            </p>
        </div>
        );
}

export default Counter;