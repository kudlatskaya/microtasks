import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./components/NewComponent";
import Button from "./components/Button";
import UseState from "./components/UseState";
import Money from "./components/Money";
import Message from "./components/Input/Message";
import Message1 from "./components/Input/Message1";
import TodoMicrotask from "./components/todo/TodoMicrotask";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

const writeCarName1 = (carName: string) => {
    console.log(carName)
}



function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    return (
        <div className="App">
            <h2>1. input</h2>
            <Message1 />
            <Message />
            <h2>2. filter</h2>
            <Money money={money}/>

            <h2>3. useSate hook</h2>
            <UseState />
            <h2>4. Button handler onClick (callback)</h2>
            <Button name={"Button1"} callBack={() => {writeCarName1("carName1")}} />
            <Button name={"Button2"} callBack={() => {writeCarName1("carName2")}} />
            <h2>5. map</h2>
            <NewComponent cars={topCars} />
            <h2>6. todolist</h2>
            <TodoMicrotask />
        </div>
);
}

export default App;
