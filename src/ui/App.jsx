import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "../bll/store";
import AcquaintanceContainer from "./acquaintance/acquaintanceContainer";
import FooterContainer from "./footer/footerContainer";
import HeaderContainer from "./header/headerContainer";
import MainPageContainer from "./main/mainContainer";
import RegstrationContainer from "./registration/registrationContainer";


const App = () => {
    return (
        <div className="App">
            <HeaderContainer/>
            <MainPageContainer/>
            <AcquaintanceContainer/>
            <RegstrationContainer/>
            <FooterContainer/>
        </div>
    );
}


const MainApp = () => {
    return <Provider store={store}>
        <App/>
    </Provider>
}

export default MainApp;
