import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import style from './Login.module.scss';

const Login = (props) => {


    useEffect(() => {
        const interval = setInterval(() => {
            props.getAuthMeTimer('ddd')
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        console.log(props.isAuth)
    }, [props.isAuth]);


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