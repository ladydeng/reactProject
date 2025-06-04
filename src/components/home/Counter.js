import React, { useState } from "react";

function Counter({ title }) {
    const [count, setCount] = useState(8);  //设置初始值为8

    const increment = () => {
        // setCount(prevCount => prevCount + 1);  //函数式更新，确保使用的是最新的旧值
        setCount(count+1)
    };

    const decrement = () => {
        // setCount(prevCount => prevCount - 1);
        setCount(count-1)
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>count++</button>
            <button onClick={decrement}>count--</button>
            <h3>接收到父组件传的值title：{ title }</h3>
        </div>
    );
}

export default Counter