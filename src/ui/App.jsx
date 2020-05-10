import React from 'react';
import {Provider} from "react-redux";
import store from "../bll/store";
import AcquaintanceContainer from "./acquaintance/acquaintanceContainer";
import HeaderContainer from "./header/headerContainer";
import MainPageContainer from "./main/mainContainer";
import RegstrationContainer from "./registration/registrationContainer";
import {BrowserRouter} from "react-router-dom";
import UsersPageContainer from "./users/usersContainer";


const App = () => {
    return (
        <>
            <HeaderContainer/>
            <MainPageContainer/>
            <AcquaintanceContainer/>
            <UsersPageContainer />
            <RegstrationContainer/>
        </>
    );
}


const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;
