import {useState} from "react";
import Container from "../UI/Container";
import Button from "./Button";
import "./Form.css";
function Form() {

    const submitHandler = e => {
        e.preventDefault()
    }

  return (
    <Container>
        <form onSubmit={submitHandler}>
        <div className="form-section">
            <label className="label">1. Enter your name.</label>
            <input type="text"/>
        </div>
         <div className="form-section">
            <label className="label">2. Enter your email.</label>
            <input type="email"/>
        </div>
         <div className="form-section">
            <label className="label">3. Enter your phone number.</label>
             <div className="inputs-wrapper">
                 <select>
                    <option>+ 48</option>
                    <option>other</option>
                 </select>
                <input type="tel"/>
             </div>
        </div>
        <div className="form-section">
            <label className="label">4. Enter your password.</label>
            <input type="password"/>
        </div>
         <div className="form-section">
            <label className="label">5. Repeat your password.</label>
            <input type="password"/>
        </div>
            <Button name="Login" type="submit" className="primary"/>
            <Button name="Register" type="submit" className="secondary"/>
        </form>
    </Container>
  );
}

export default Form;