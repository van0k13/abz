import React from "react";
import s from './main.module.css'


const MainPage = () => {
    return (
        <div className={s.mainPageWrapper}>
            <div className={s.mainPage}>
                <div className={s.textWrapper}>
                    <h1>test assignment for frontend developer position</h1>
                    <p>We kindly remind you that your test assignment should be submitted as a link
                        to github/bitbucket repository. Please be patient, we consider
                        and respond to every application that meets minimum requirements.
                        We look forward to your submission. Good luck! The photo has to scale
                        in the banner area on the different screens</p>
                    <button>Sign up now</button>
                </div>
            </div>
        </div>
    )
};

export default MainPage;