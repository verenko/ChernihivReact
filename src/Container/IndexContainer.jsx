import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Index from "../components/Index/Index";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {getProblemRed} from "../redux/problem-reducer";
import {indexGetThree} from "../redux/index-reducer";

class IndexContainer extends React.Component {

    componentDidMount() {
        this.props.indexGetThree()
    }

    render() {
        return <Index {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    indexPage: state.indexPage
});


export default compose(
    connect(mapStateToProps, {indexGetThree}),
)(IndexContainer);