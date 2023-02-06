import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";

const students = [
    {id: 1, name: 'name1', age: 10},
    {id: 2, name: 'name2', age: 20},
    {id: 3, name: 'name3', age: 30},
];

function App() {
  return (
    <div className="App">
      <NewComponent students={students}/>
    </div>
  );
}

export default App;
