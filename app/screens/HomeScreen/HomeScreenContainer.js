import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/homeActions';
import * as likePostActions from '../../actions/likePostActions';
import * as unLikePostActions from '../../actions/unLikePostActions';
import * as userDetailsActions from '../../actions/userDetailsActions';
import * as reportAdminActions from '../../actions/reportAdminActions';
import * as navigationActions from '../../actions/navigationActions';
import * as textFeedActions from '../../actions/textFeedActions';
import * as addPostImageActions from '../../actions/addPostImageActions';
import * as addPostVideoActions from '../../actions/addPostVideoActions';
import * as suggestionsListActions from '../../actions/suggestionsListActions';
import * as followSuggestActions from '../../actions/followSuggestActions';
import * as deleteHomePostActions from '../../actions/deleteHomePostActions';
class HomeScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        data:state.homeReducer.data,
        isHomeLoading:state.loadingReducer.isHomeLoading,
        token:state.loginReducer.token,
        students_info:state.loginReducer.students_info,
        userData:state.userDetailsReducer.data,
        suggestedData:state.suggestionsListReducer.data,
        suggestedData:state.suggestionsListReducer.suggestedData
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestHome: (token,page) => {
            dispatch(
                homeActions.requestHome(token,page)
            )
        },
        requestLikePost:(token,post_id,index,item)=>{
            dispatch(
                likePostActions.requestLikePost(token,post_id,index,item)
            )
        },
        requestUnLikePost:(token,post_id,index,item)=>{
            dispatch(
                unLikePostActions.requestUnLikePost(token,post_id,index,item)
            )
        },
        requestUser:(token)=>{
            dispatch(userDetailsActions.requestUser(token))
        },
        requestReport:(token,post_id)=>{
            dispatch(reportAdminActions.requestReport(token,post_id))
        },
        navigateToCommentsListScreen:(item)=>{
            navigationActions.navigateToCommentsListScreen(item)
        },
        navigateToPostDetailScreen:(item)=>{
            navigationActions.navigateToPostDetailScreen(item)
        },
        navigateToEditPostScreen:(item)=>{
            navigationActions.navigateToEditPostScreen(item)
        },
        textFeedRequest:(token,content)=>{
            dispatch(textFeedActions.textFeedRequest(token,content))
        },
        addPostImageRequest:(image,content,token)=>{
          dispatch(addPostImageActions.addPostImageRequest(image,content,token))
        },
        addPostVideoRequest:(video,content,token)=>{
            dispatch(addPostVideoActions.addPostVideoRequest(video,content,token))
          },
        requestAllSuggestions:(token)=>{
            dispatch(suggestionsListActions.requestAllSuggestions(token))
        },
        requestFollow:(token,follow_studentuser_id,item,index)=>{
            dispatch(followSuggestActions.requestFollow(token,follow_studentuser_id,item,index))
        },
        deleteHomePostRequest:(token,post_id,index,item)=>{
            dispatch(deleteHomePostActions.deleteHomePostRequest(token,post_id,index,item))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenContainer);
