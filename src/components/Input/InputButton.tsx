import React, {ChangeEvent, useState} from 'react';

type InputButtonPropsType = {
    buttonHandler: (inputMessage: string) => void,
}

const InputButton = (props: InputButtonPropsType) => {
    let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const onClickButtonHandler = () => {
        props.buttonHandler(title);

        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default InputButton;