import React from 'react';


type ButtonPropstype = {
    name: string,
    callBack: ()=>void,
}

const Button = (props: ButtonPropstype) => {
    const onClickButtonHandler = () => {
        props.callBack();
    }

    return (
       <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button;