import "./Form.scss"
import {Operator} from "../Operator/Operator";

export const Form = () => {
    return (
        <div className="container">
            <form className="form-inline" action="" method="POST">
                <input type="number" name="left" placeholder="Left number" required/>
                <Operator/>
                <input type="number" name="right" placeholder="Right number" required/>
                <button type="submit">Operate</button>
            </form>
        </div>
    )
}