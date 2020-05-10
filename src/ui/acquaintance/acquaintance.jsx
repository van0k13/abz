import React from "react";
import s from './acquaintance.module.css'


const Acquaintance = () => {
    return (
        <div className={s.acquaintancePageWrapper}>
            <div className={s.acquaintancePage}>
                <h1 className={s.header}>Let's get acquainted</h1>
                <div className={s.mainBody}>
                    <div className={s.image}/>
                    <div className={s.textNlink}>
                        <h2>I am cool frontend developer</h2>
                        <p>We will evaluate how clean your approach  to writing CSS
                            and Javascript code is. You can use any CSS and Javascript
                            3rd party libraries without any restriction.<br/>
                            <br/>
                            If 3rd party css/javascript libraries are added to the project
                            via bower npm/yarn you will get bonus points. If you use
                            any task runner (gulp/webpack) you will get bonus points as well.
                            Slice service directory page PSD mockup into HTML5/C553.</p>
                        <a href={'#'}>Sign up now</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Acquaintance;