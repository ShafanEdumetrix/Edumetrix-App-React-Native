import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowingListPage from './FollowingListPage';
import * as followingListActions from '../../actions/followingListActions';

class FollowingListPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <FollowingListPage {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.followingListReducer.data,
        isFollowingListLoading:state.loadingReducer.isFollowingListLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestAllFollowings:(token)=>{
            dispatch(followingListActions.requestAllFollowings(token))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowingListPageContainer);
