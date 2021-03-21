import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import style from './Login.module.scss';
import HeaderContainer from "../../Container/HeaderContainer";

const Login = (props) => {

    useEffect(() => {

    }, [props.isAuth]);

    const getHello = () => {
        props.hellow()
    };

    return (
        <div className={style.login}>
            <HeaderContainer/>
            <div className={style.auth_link}>
                <a onClick={() => {
                    window.open('https://t.me/ChernihivProblemBot?start=' + props.token)
                }}>Войти через Telegram</a>
            </div>
        </div>
    );
};

export default Login;