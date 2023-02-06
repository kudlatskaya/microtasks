import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./components/NewComponent";
import Button from "./components/Button";

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

const writeCarName1 = (carName: string) => {
    console.log(carName)
}

function App() {
    return (
        <div className="App">
            <Button name={"Button1"} callBack={() => {writeCarName1("carName1")}} />
            <Button name={"Button2"} callBack={() => {writeCarName1("carName2")}} />
            <NewComponent cars={topCars} />
        </div>
);
}

export default App;
