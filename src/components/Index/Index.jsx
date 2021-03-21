import React, {Component, createRef, useEffect, useState} from "react";
import GoogleMapReact from 'google-map-react';
import style from './Main.module.scss'

import Preloader from "../common/Preloader/Preloader";

import IndexPage from "./IndexPage";


class Index extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (

            <div className="content-page">
                {
                    this.props.indexPage.load
                        ? <Preloader/>
                        : <IndexPage state={this.props}/>
                }

            </div>
        );
    }
}

export default Index;