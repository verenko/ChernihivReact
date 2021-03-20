import React from 'react';
import {connect} from "react-redux";
import Login from "../components/Login/Login";
import {getAuthUserData, login} from "../redux/auth-reducer";
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
        const socket = new SockJS('http://localhost:8075/chat');
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            stompClient.subscribe('/topic/greetings', function(greeting){
                console.log(JSON.parse(greeting.body).content);
                stompClient.send("/app/topic", {}, JSON.stringify({ 'name': 'fffffff' }));
            });
        });

        //return () => stompClient && stompClient.disconnect();


    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth) {
            this.props.history.push("/")
        }
    }

    render() {

        return <Login {...this.props} getAuthUserData={this.props.getAuthUserData}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username
});

export default compose(
    connect(mapStateToProps, {getAuthUserData}),
)(LoginContainer);
