import React, {useEffect} from 'react';

import style from './Card.module.scss'
import {NavLink} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const Card = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <NavLink to={`/problem/${props.id}`} data-card-id={props.id} className={style.wrapper__card_item}>
                <div className={style.card__image}>
                    <img src={'http://194.62.98.10/'+props.image} alt=""/>
                </div>
                <div className={style.card__name}>
                    <p>{props.name}</p>
                </div>
                <div className={style.location}>
                    <div className='marker__location'>
                        x:{props.location.x}; y:{props.location.y};
                    </div>
                </div>

                <div className={style.btn__forum}>
                    <div>Обсудить</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;