import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const Message1 = () => {
    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    //local input state
    let [title, setTitle] = useState('');

    const addMessage = (inputMessage:string) => {
        setMessages([{message: inputMessage}, ...messages]);
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }

    return (<>
            <div>
                <h2>Input, button</h2>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
            </div>
            {
                messages.map((item, ind) => {
                    return <div key={ind}>{item.message}</div>
                })
            }
        </>

    );
};

export default Message1;