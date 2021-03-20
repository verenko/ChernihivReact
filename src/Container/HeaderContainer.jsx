import React from 'react';
import Header from "../components/Header/Header";
import {connect} from "react-redux";
import {logout} from "../redux/auth-reducer";
import {withRouter} from "react-router-dom";

class HeaderContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
});

export default withRouter(connect(mapStateToProps, {logout})(HeaderContainer));