import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Problem from "../components/ProblemItem/Problem";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProblemContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Problem {...this.props} />
    }
}

const mapStateToProps = (state) => ({

    problem: state.problemItem
});


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {})
)(ProblemContainer)