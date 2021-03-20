import React, {useState} from "react";
import Header from "../Header/Header";
import style from './Login.module.scss';

const Login = (props) => {

    return (
        <div className={style.login}>
            <Header/>
            <div className={style.auth_link}>
                <a href="">Войти через Telegram</a>
            </div>
        </div>
    );
};

export default Login;