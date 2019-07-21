import React, { Component } from 'react';
import ProfileListScreen from './ProfileListScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as getAllUserPostActions from '../../actions/getAllUserPostActions';
import * as changePasswordActions from '../../actions/changePasswordActions';
import * as reportAdminActions from '../../actions/reportAdminActions';
import * as myHomeLikeActions from '../../actions/myHomeLikeActions';
import * as myHomeUnLikeActions from '../../actions/myHomeUnLikeActions';
import * as deletePostActions from '../../actions/deletePostActions';

class ProfileListScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ProfileListScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        userPostData:state.getUserPostDataReducer.data,
        token:state.loginReducer.token,
        userData:state.userDetailsReducer.data,
        isGetAllUserPost:state.loadingReducer.isGetAllUserPost
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToEditProfileScreen: () =>
            navigationActions.navigateToEditProfileScreen(),
        navigateToCommentsListScreen:(item)=>{
                navigationActions.navigateToCommentsListScreen(item)
            },
        navigateToFollowersListPage:()=>{
                navigationActions.navigateToFollowersListPage()
            },
        navigateToPostDetailScreen:(item)=>{
                navigationActions.navigateToPostDetailScreen(item)
            },
        navigateToFollowingListPage:()=>{
                navigationActions.navigateToFollowingListPage()
            },
        requestAllData:(token)=>{
            dispatch(
                getAllUserPostActions.requestAllData(token)
            )
        },
        requestReport:(token,post_id)=>{
            dispatch(reportAdminActions.requestReport(token,post_id))
        },
        requestLikeMyHome:(token,post_id,index,item)=>{
            dispatch(
                myHomeLikeActions.requestLikeMyHome(token,post_id,index,item)
            )
        },
        requestUnLikeMyHome:(token,post_id,index,item)=>{
            dispatch(
                myHomeUnLikeActions.requestUnLikeMyHome(token,post_id,index,item)
            )
        },
        deletePostRequest:(token,post_id)=>{
            dispatch(deletePostActions.deletePostRequest(token,post_id))
        },
        changePassword:(token,old_password,password)=>{
            dispatch(changePasswordActions.changePassword(token,old_password,password))}
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileListScreenContainer);
