import React, { Component } from 'react';
import MyHomeScreen from './MyHomeScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as getAllUserPostActions from '../../actions/getAllUserPostActions';
import * as getCommentsActions from '../../actions/getCommentsActions';
import * as reportAdminActions from '../../actions/reportAdminActions';
import * as myHomeLikeActions from '../../actions/myHomeLikeActions';
import * as myHomeUnLikeActions from '../../actions/myHomeUnLikeActions';
import * as deletePostActions from '../../actions/deletePostActions';

class MyHomeScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MyHomeScreen {...this.props} />;
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
        navigateToPostDetailScreen:(item)=>{
            navigationActions.navigateToPostDetailScreen(item)
        },
        deletePostRequest:(token,post_id)=>{
            dispatch(deletePostActions.deletePostRequest(token,post_id))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHomeScreenContainer);
