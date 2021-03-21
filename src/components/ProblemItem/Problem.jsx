import React, {Component, createRef, useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import style from './Problem.module.scss'
import Header from "../Header/Header";
import Card from "../ItemCard/Card";
import Comment from "../common/Comments/Comment";
import Maps from "../common/Map/Maps";
import Swiper from "../common/Swiper/Swiper";
import HeaderContainer from "../../Container/HeaderContainer";
import Preloader from "../common/Preloader/Preloader";
import ProblemContainer from "../../Container/ProblemContainer";


class Problem extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (

            <div className="content-page">
                {
                    this.props.problem.load
                        ? <Preloader/>
                        : <ProblemContainer state={this.props}/>
                }

            </div>
        );
    }
}

export default Problem;