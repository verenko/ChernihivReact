import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Index from "../components/Index/Index";

class IndexContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Index {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    indexPage: state.indexPage
});

export default compose(connect(mapStateToProps))(IndexContainer)