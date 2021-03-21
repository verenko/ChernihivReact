import React, {useEffect, useState} from "react";
import style from './Main.module.scss'
import Header from "../Header/Header";
import Card from "../ItemCard/Card";
import HeaderContainer from "../../Container/HeaderContainer";


const IndexPage = (props) => {


    const headMainCards = props.state.indexPage.mainProblem.map(x => (
        <Card id={x.id} name={x.title} image={x.images[0].path} location={x.location}/>))


    return (

        <div>
            <div className={style.wrraper__main_index}>
                <div className={style.wrraper__main_content}>
                    <div className={style.header}>
                        <HeaderContainer/>
                    </div>
                    <div className={style.wrraper__main_info}>
                        <div className={style.info}>
                            <div className={style.head_text}>
                                <p>Поможем Чернигову</p>
                                <p>Вместе</p>
                            </div>
                            <div>
                                <p>Данный сервис работает во благо города. Вы можете поделиться проблемой города,
                                    которая вас беспокоит, и найти на сайте материальную или юридическую помощь.</p>
                            </div>
                            <div className={style.btn_send_promblem}>
                                <a href="">Заявить о проблеме</a>
                            </div>
                            <div className={style.bottom__text}>
                                <p>Обращение полностью анонимно и проходит через платформу телеграмм</p>
                            </div>
                        </div>

                        <div className={style.main__card_items_wrapper}>
                            <div className={style.head__line__txt}>
                                <p>Топ проблем</p>
                                <span></span>
                            </div>
                            <div className={style.main__card_items}>
                                {headMainCards}
                            </div>
                            <div className={style.head__line__txt + ' ' + style.bottom__line}>
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={style.gradient__main}>
                </div>
            </div>

            <div className={style.wrraper__last_appeal}>


                <div className={style.head__appeal}>
                    <p>Последние проблемы</p>
                    <span className={style.line}></span>
                </div>

                <div className={style.wrapper__appeal_cards}>
                    {headMainCards}
                </div>
                <div className={style.all__problems}>
                    <a href="">
                        Всі проблемы
                    </a>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;