import React, {useState} from 'react';
import InputButton from "./InputButton";
import Button from "./Button";
import Input from './Input'


const Message = () => {


    let [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (inputMessage:string) => {
        setMessages([{message: inputMessage}, ...messages]);
    }

    return (<>

            <div>
                <h2>Input with button</h2>
                <InputButton buttonHandler={addMessage}/>
            </div>
            {
                messages.map((item, ind) => {
                    return <div key={ind}>{item.message}</div>
                })
            }
        </>
    )
};

export default Message;