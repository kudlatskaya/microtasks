import React from 'react';

type ButtonPropsType = {
    name: string;
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    const  { name, callBack } = props;

    const onClickHandler = () => {
        callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>
                { name }
            </button>

        </div>
    );
};

export default Button;