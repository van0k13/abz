import s from "./forms.module.css";
import React from "react";


const FormFileSend = () => {
    return (
        <div className={s.photoToSend}>
            <span>Photo</span><br/>
            <input type="text" placeholder={'Upload your photo'}/>
            <div className={s.labelWrapper}>
                <input className={s.browseButton} type="file" id={'browseButton'}/>
                <label className={s.labelTab} htmlFor="browseButton">Browse</label>
            </div>
        </div>

    )
};

export default FormFileSend;