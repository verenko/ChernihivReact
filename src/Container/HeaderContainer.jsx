import React from 'react';
import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {logout, setUser} from "../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class HeaderContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {setUser,logout}),
)(HeaderContainer);