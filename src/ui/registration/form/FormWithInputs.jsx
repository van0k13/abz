import s from "./forms.module.css";
import React from "react";


const FormWithInputs = () => {
    return (
        <div className={s.formWithInputs}>
            <span>Name</span><br/>
            <input className={s.inputItself} placeholder={'Your name'} type="text"/><br/>
            <span>Email</span><br/>
            <input placeholder={'Your email'} type="text"/><br/>
            <span> Phone number</span><br/>
            <input placeholder={'+380 XX XXX XX XX'} type="text"/>
            <p className={s.enterTelNum}>Enter phone number in open format</p>
        </div>
    )
};

export default FormWithInputs;