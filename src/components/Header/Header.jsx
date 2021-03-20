import React from 'react';
import style from './Header.module.scss';
import {NavLink, withRouter} from "react-router-dom";

const Header = (props) => {

    return (
        <div>
            <div className={style.header}>
                <a href='/'>
                    <img src="http://placehold.it/100x30" alt=""/>
                </a>
                <div className={style.line_header}>

                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);