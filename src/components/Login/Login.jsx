import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import style from './Login.module.scss';
import HeaderContainer from "../../Container/HeaderContainer";

const Login = (props) => {

    useEffect(() => {
        console.log(props.isAuth)
    }, [props.isAuth]);


    return (
        <div className={style.login}>
            <HeaderContainer/>
            <div className={style.auth_link}>
                <a href="">Войти через Telegram</a>
            </div>
        </div>
    );
};

export default Login;