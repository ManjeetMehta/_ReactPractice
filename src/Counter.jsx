import { useState } from "react";

const Counter=()=> {
    const [count, setCount] = useState(0)
    const [rCounter, setCounter] = useState(10)
    return (
        <div>
            <h1>Counter:{count}</h1>
            <h2>R Counter : {rCounter}</h2>
            <button onClick={() => setCount(count + 1)}>update counter</button>
            <button onClick={() => setCounter(rCounter - 1)}>update counter</button>
        </div>
    )
}

export default Counter;