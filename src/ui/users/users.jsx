import React from "react";
import s from './users.module.css'


const UsersPage = () => {
    return (
        <div className={s.usersPageWrapper}>
            <div className={s.usersPage}>
                <h1>Our cheerful users</h1>
                <div className={s.users}>
                    <div className={s.userWrapper}>
                        <div className={s.user}>
                            <div className={s.userImg}/>
                            <div className={s.userName}><h2>Maximillian</h2></div>
                            <div className={s.userPosition}>
                                Leading specialist of the control department
                            </div>
                            <div className={s.userMail}>
                                leadingspecialist@gmail.com
                            </div>
                            <div className={s.userTelephone}>
                                +380975436654
                            </div>
                        </div>
                    </div>
                    <div className={s.userWrapper}>
                        <div className={s.user}>
                            <div className={s.userImg}/>
                            <div className={s.userName}><h2>Maximillian</h2></div>
                            <div className={s.userPosition}>
                                Leading specialist of the control department
                            </div>
                            <div className={s.userMail}>
                                leadingspecialist@gmail.com
                            </div>
                            <div className={s.userTelephone}>
                                +380975436654
                            </div>
                        </div>
                    </div>
                    <div className={s.userWrapper}>
                        <div className={s.user}>
                            <div className={s.userImg}/>
                            <div className={s.userName}><h2>Maximillian</h2></div>
                            <div className={s.userPosition}>
                                Leading specialist of the control department
                            </div>
                            <div className={s.userMail}>
                                leadingspecialist@gmail.com
                            </div>
                            <div className={s.userTelephone}>
                                +380975436654
                            </div>
                        </div>
                    </div>
                    <div className={s.userWrapper}>
                        <div className={s.user}>
                            <div className={s.userImg}/>
                            <div className={s.userName}><h2>Maximillian</h2></div>
                            <div className={s.userPosition}>
                                Leading specialist of the control department
                            </div>
                            <div className={s.userMail}>
                                leadingspecialist@gmail.com
                            </div>
                            <div className={s.userTelephone}>
                                +380975436654
                            </div>
                        </div>
                    </div>
                </div>
                <button>Show more</button>
            </div>
        </div>
    )
};

export default UsersPage;