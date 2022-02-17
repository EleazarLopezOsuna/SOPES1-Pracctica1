import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {OperationsList} from "./components/OperationList/OperationsList";
import {Form} from "./components/Form/Form";

function App() {
    return (
        <div className="App">
            <Header/>
            <Form></Form>
            <OperationsList operations={[
                {Left: 23, Right: 5, Operator: "+", Result: 28, CreatedAt: "DATE"},
                {Left: 1, Right: 2, Operator: "+", Result: 3, CreatedAt: "DATE"},
                {Left: 2, Right: 4, Operator: "*", Result: 8, CreatedAt: "DATE"},
                {Left: 10, Right: 5, Operator: "+", Result: 15, CreatedAt: "DATE"},
                {Left: 20, Right: 2, Operator: "/", Result: 10, CreatedAt: "DATE"},
                {Left: 0, Right: 5, Operator: "*", Result: 0, CreatedAt: "DATE"},
                {Left: 23, Right: 5, Operator: "+", Result: 28, CreatedAt: "DATE"},
                {Left: 1, Right: 2, Operator: "+", Result: 3, CreatedAt: "DATE"},
                {Left: 2, Right: 4, Operator: "*", Result: 8, CreatedAt: "DATE"},
                {Left: 10, Right: 5, Operator: "+", Result: 15, CreatedAt: "DATE"},
                {Left: 20, Right: 2, Operator: "/", Result: 10, CreatedAt: "DATE"},
                {Left: 0, Right: 5, Operator: "*", Result: 0, CreatedAt: "DATE"}
            ]}/>
        </div>
    );
}

export default App;
