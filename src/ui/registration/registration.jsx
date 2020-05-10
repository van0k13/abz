import React from "react";
import s from './registration.module.css'


const Registration = () => {
    return (
        <div className={s.registrationPageWrapper}>
            <div className={s.registrationPage}>
                <h1 className={s.header}>Register to get work</h1>
                <div className={s.formToSend}>
                    <form className={s.formWithInputs}>
                       <span>Name</span><br/>
                        <input placeholder={'Your name'} type="text"/><br/>
                        <span>Email</span><br/>
                        <input placeholder={'Your email'} type="text"/><br/>
                        <span> Phone</span><br/>
                        <input placeholder={'+380 XX XXX XX XX'} type="text"/>
                    </form>
                    <div className={s.radioForm}>
                        <span>Select your position</span><br/>
                        <input name={'radioform'} type="radio" id={'Choice front'}/>
                        <label htmlFor="Choice front">Frontend developer</label>
                        <br/>
                        <input name={'radioform'} type="radio" id={'Choice back'}/>
                        <label htmlFor="Choice back">Backend developer</label>
                        <br/>
                        <input name={'radioform'} type="radio" id={'Designer'}/>
                        <label htmlFor="Designer">Designer</label>
                        <br/>
                        <input name={'radioform'} type="radio" id={'Choice QA'}/>
                        <label htmlFor="QA">QA</label>
                    </div>
                    <div className={s.photoToSend}>
                        <input type="text" placeholder={'Upload your photo'}/>
                        <input className={s.browseButton} type="file" id={'browseButton'}/>
                        <label htmlFor="browseButton">Browse</label>
                    </div>
                </div>
                <button>Sign up now</button>
            </div>
        </div>
    )
};

export default Registration;