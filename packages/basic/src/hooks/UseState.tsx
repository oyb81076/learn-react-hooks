import * as React from "react"
import { useState } from "react";
export default function UseState() {
    const [count, setCount] = useState(0)
    const handleClick = ()=> setCount(count + 1)
    return (
        <div>
            <p>UseState</p>
            <p>You Have Click {count} times</p>
            <button onClick={handleClick}>ClickMe</button>
        </div>
    );
}