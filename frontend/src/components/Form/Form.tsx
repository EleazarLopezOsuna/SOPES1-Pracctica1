import "./Form.scss"
import React, {useState} from "react";

export const Form = () => {

    const [Left, setLeft] = useState("")
    const [Right, setRight] = useState("")
    const [Operator, setOperator] = useState("")

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        const leftNumber = Number(Left)
        const rightNumber = Number(Right)
        let result = 0

        const operation = {
            "Left": leftNumber,
            "Right": rightNumber,
            Operator,
            "Result": result,
            "CreatedAt": (new Date()).toISOString()
        };

        fetch("http://localhost:12345/operation", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(operation)
        }).then(() => {

        })
        setLeft(() => "")
        setRight(() => "")
        setOperator(() => "+")
    }

    return (
        <div className="container">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="left"
                    id="left"
                    value={Left}
                    onChange={(e) => setLeft(e.target.value)}
                    placeholder="Left number"
                    required/>
                <select
                    name="operator"
                    id="operator"
                    value={Operator}
                    onChange={(e) => setOperator(e.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    type="number"
                    name="right"
                    id="right"
                    value={Right}
                    onChange={(e) => setRight(e.target.value)}
                    placeholder="Right number"
                    required/>
                <button type="submit">Operate</button>
            </form>
        </div>
    )
}