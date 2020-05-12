import s from "./forms.module.css";
import React from "react";


const RadioForm = () => {
    return (
        <div className={s.radioForm}>
            <span>Select your position</span><br/>
            <label htmlFor="Choice front">
                <input className={s.radioCircle} name={'radioform'} type="radio" id={'Choice front'}/>
                Frontend developer
            </label>
            <label htmlFor="Choice back">
                <input className={s.radioCircle} name={'radioform'} type="radio" id={'Choice back'}/>
                Backend developer
            </label>
            <label htmlFor="Designer">
                <input className={s.radioCircle} name={'radioform'} type="radio" id={'Designer'}/>
                Designer
            </label>
            <label htmlFor="QA">
                <input className={s.radioCircle} name={'radioform'} type="radio" id={'Choice QA'}/>
                QA
            </label>
        </div>
    )
}

export default RadioForm