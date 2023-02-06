import React, {useState} from 'react';
import Money from "./Money";

const UseState = () => {
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }

    const counterReset = () => {
        setA(a = 0);
    }

    return (<>
            <div>
                <h1>{a}</h1>
                <button onClick={onClickHandler}>Button</button>
                <button onClick={counterReset}>Reset</button>
            </div>

        </>
    );
};

export default UseState;