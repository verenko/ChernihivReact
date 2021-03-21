import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";

import Problem from "../components/ProblemItem/Problem";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {getProblemRed} from "../redux/problem-reducer";

class ProblemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problemtId: this.props.match.params.idProblem
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.props.getProblemRed(this.state.problemtId)
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
    connect(mapStateToProps, {getProblemRed})
)(ProblemContainer)