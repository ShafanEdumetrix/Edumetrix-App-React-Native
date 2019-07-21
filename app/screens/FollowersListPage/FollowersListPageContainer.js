import React, { Component } from 'react';
import { connect } from 'react-redux';
import FollowersListPage from './FollowersListPage';
import * as followersListActions from '../../actions/followersListActions';
import * as navigationActions from '../../actions/navigationActions';
import * as unfollowActions from '../../actions/unfollowActions';
import * as followActions from '../../actions/followActions';

class FollowersListPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <FollowersListPage {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.followersListReducer.data,
        isFollowerListLoading:state.loadingReducer.isFollowerListLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestAllFollowers:(token)=>{
            dispatch(followersListActions.requestAllFollowers(token))
        },
        requestUnFollow:(token,follow_studentuser_id,item,index)=>{
            dispatch(unfollowActions.requestUnFollow(token,follow_studentuser_id,item,index))
        },
        navigateToChatDetailScreen: (item) =>
            navigationActions.navigateToChatDetailScreen(item),
        requestFollow:(token,follow_studentuser_id,item,index)=>{
                dispatch(followActions.requestFollow(token,follow_studentuser_id,item,index))
            }
    };
} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowersListPageContainer);
