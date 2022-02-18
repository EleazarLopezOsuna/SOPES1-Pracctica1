import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {OperationsList} from "./components/OperationList/OperationsList";
import {Form} from "./components/Form/Form";
import Axios from "axios";

function App() {

    const [operations, setOperations] = useState([])

    useLayoutEffect(() => {
        Axios.get("http://34.67.195.168:12345/operations").then(
            (response) => {
                setOperations(response.data)
            })
    }, []);

    return (
        <div className="App">
            <Header/>
            <Form setOperations={setOperations}/>
            <OperationsList operations={operations}/>
        </div>
    );
}

export default App;
