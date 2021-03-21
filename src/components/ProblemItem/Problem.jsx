import React, {createRef, useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import style from './Problem.module.scss'
import Header from "../Header/Header";
import Card from "../ItemCard/Card";
import Comment from "../common/Comments/Comment";
import Maps from "../common/Map/Maps";
import Swiper from "../common/Swiper/Swiper";
import HeaderContainer from "../../Container/HeaderContainer";

const Problem = (props) => {

    let [comment, setComment] = useState("");

    const mainImage = createRef();

    const clickSliderImage = (e) => {
        mainImage.current.setAttribute('src', e.target.getAttribute('src'))
    }

    return (

        <div>
            <div className={style.head}>
                <HeaderContainer/>

            </div>
            <div className={style.content}>
                <div>
                    <div className={style.info__problem}>
                        <div className={style.media}>
                            <div className={style.media_img}>
                                <img src={props.problem.images[0].path} ref={mainImage} alt=""/>
                            </div>
                        </div>
                        <div className={style.main__info}>
                            <h1>Яма на рокоссовского</h1>
                            <div className={style.location}>
                                <div className='marker__location'>
                                    x:{props.problem.location.x}; y:{props.problem.location.y};
                                </div>
                            </div>
                            <div className={style.google__maps}>
                                <Maps name={props.problem.name} position={props.problem.coordinates}/>
                            </div>

                            <div className={style.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis dictum enim rutrum
                                amet. In augue nunc odio cursus malesuada. Tincidunt lectus et platea aliquam dictum sem
                                fringilla. Urna, vitae tristique tellus quis in. Sit scelerisque sed risus mi mauris
                                nibh ac.
                                Ac consequat semper cum sed urna suspendisse condimentum orci. Elit morbi tincidunt dui,
                                sed. Enim sollicitudin tellus amet scelerisque maecenas vel. Accumsan feugiat tincidunt
                                sed quis eu arcu. Morbi vitae porttitor sit et curabitur id amet sit pharetra.
                            </div>

                            <div className={style.peticion}>
                                <a href="">Петиция</a>
                            </div>
                            <div className={style.wrapper__vote}>
                                <div className={style.vote}>
                                    <button>
                                        Да
                                    </button>
                                    <button>
                                        Нет
                                    </button>

                                </div>
                                <div className={style.rate}>
                                    <div style={{width: `60` + '%'}}>
                                        60%
                                    </div>
                                    <div style={{width: `40` + '%'}}>
                                        40%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.wrapper__aside__comments}>
                        <div className={style.comments}>
                            <div className={style.setter__comment}>
                                <textarea type="text" value={comment}
                                          onChange={(event) => setComment(event.target.value)}/>
                                <button>Отправить</button>
                            </div>
                            <div className={style.comments__items}>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                            </div>
                        </div>
                        <div className={style.sidebar}>
                            <p>Топ проблем</p>
                            <div>
                                <Card id='1111' name='111' image='11111' location='111'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem;