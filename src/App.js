import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Router, Route, Switch, withRouter, useHistory} from "react-router-dom";
import HeaderContainer from "./Container/HeaderContainer";
import LoginContainer from "./Container/LoginContainer";
import {compose} from "redux";

import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import IndexContainer from "./Container/IndexContainer";
import Footer from "./components/Footer/Footer";
import ProblemConteainer from "./Container/ProblemContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    componentDidUpdate(prevProps) {

    }

    render() {

        return (
            <div className="main_container">
                <div className="content_main">
                    <Switch>
                        <Route exact path="/" component={IndexContainer}></Route>
                        <Route path="/login" component={LoginContainer}></Route>
                        <Route exact path="/problem/:idProblem" component={ProblemConteainer}></Route>
                    </Switch>
                </div>

                <Footer/>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

