import React from 'react';
import {connect} from "react-redux";
import Login from "../components/Login/Login";
import {getAuthMeTimer, getAuthUserData, login} from "../redux/auth-reducer";
import {compose} from "redux";
import SockJS from 'sockjs-client'; // Note this line
import Stomp from 'stompjs';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {

        if (this.props.isAuth) {
            this.props.history.push("/")
        }


    }

    getAuthMeTimer = () => {
        this.props.getAuthMeTimer()
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth) {
            this.props.history.push("/")
        }
        const socket = new SockJS('http://194.62.98.10:8075/channel');
        const stompClient = Stomp.over(socket);
        //const id = Math.floor(Math.random() * Math.floor(10));
        const token = Math.floor(2147483648 * Math.random()).toString(36) + Math.floor(2147483648 * Math.random()).toString(36) + Math.floor(2147483648 * Math.random()).toString(36);


        stompClient.connect({}, function (frame) {
            stompClient.send("/app/channel/" + token.toString(), {}, token.toString());
            stompClient.subscribe('/channel/auth/' + token.toString(), function (greeting) {
                console.log(token);
            });
        });
    }

    render() {

        return <Login {...this.props} getAuthMeTimer={this.getAuthMeTimer}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username,
    tokenTelegram: state.auth.tokenTelegram
});

export default compose(
    connect(mapStateToProps, {getAuthMeTimer}),
)(LoginContainer);
