import React, { Component } from 'react';
import FindFriendsScreen from './FindFriendsScreen';
import { connect } from 'react-redux';
import * as getAllStudentActions from '../../actions/getAllStudentActions';
import * as navigationActions from '../../actions/navigationActions';
import * as followStudentActions from '../../actions/followStudentActions';
import * as unfollowStudentActions from '../../actions/unfollowStudentActions';

class FindFriendsScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <FindFriendsScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        userData:state.userDetailsReducer.data,
        data:state.getStudentsReducer.data,
        isStudentLoading:state.loadingReducer.isStudentLoading,
        token:state.loginReducer.token
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestAllStudent:(token,page)=>{
            dispatch(
                getAllStudentActions.requestAllStudent(token,page)
            )
        },
        requestUnFollowStudent:(token,follow_studentuser_id,item,index)=>{
            dispatch(unfollowStudentActions.requestUnFollowStudent(token,follow_studentuser_id,item,index))
        },
        navigateToStudentFeedScreen: (item) =>
            navigationActions.navigateToStudentFeedScreen(item),
        navigateToChatDetailScreen: (item) =>
            navigationActions.navigateToChatDetailScreen(item),
        requestFollowStudent:(token,follow_studentuser_id,item,index)=>{
            dispatch(followStudentActions.requestFollowStudent(token,follow_studentuser_id,item,index))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FindFriendsScreenContainer);
