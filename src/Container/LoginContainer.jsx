import React from 'react';
import {connect} from "react-redux";
import Login from "../components/Login/Login";
import {hellow, login, logout, setUser} from "../redux/auth-reducer";
import {compose} from "redux";
import SockJS from 'sockjs-client'; // Note this line
import Stomp from 'stompjs';

const token = Math.floor(2147483648 * Math.random()).toString(36) + Math.floor(2147483648 * Math.random()).toString(36) + Math.floor(2147483648 * Math.random()).toString()

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        let self = this.props
        if (this.props.isAuth) {
            this.props.history.goBack()
        }


        function setUsere(data) {
            self.setUser(data)
        }

        const socket = new SockJS('http://194.62.98.10:8075/channel');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            stompClient.send("/app/channel/" + token.toString(), {}, token.toString());
            stompClient.subscribe('/channel/auth/' + token.toString(), function (body) {
                if (body.body !== 'connect') setUsere(JSON.parse(body.body))
            });
        });


    }


    componentDidUpdate() {
        if (this.props.isAuth) {
            this.props.history.goBack()
        }
    }

    render() {

        return <Login {...this.props} token={token}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username,

});

export default compose(
    connect(mapStateToProps, {setUser}),
)(LoginContainer);
