import { connect } from 'react-redux';

import {
    bindActionCreators,
    compose
} from 'redux';
import App from './App';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
        },
        dispatch
    )
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)