import React, {ChangeEvent, useState} from 'react';

type InputPropstype = {
    setTitle: (title:string)=>void,
    title:string,
}

const Input = (props:InputPropstype) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    }

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;