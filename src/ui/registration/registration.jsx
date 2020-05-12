import React from "react";
import s from './registration.module.css'
import FormFileSend from "./form/FormFileSend";
import RadioForm from "./form/RadioForm";
import FormWithInputs from "./form/FormWithInputs";


const Registration = () => {
    return (
        <div className={s.registrationPageWrapper}>
            <div className={s.registrationPage}>
                <h1 className={s.header}>Register to get a work</h1>
                <div className={s.formToSend}>
                    <FormWithInputs />
                    <RadioForm />
                    <FormFileSend />
                </div>
                <button>Sign up now</button>
            </div>
        </div>
    )
};

export default Registration;