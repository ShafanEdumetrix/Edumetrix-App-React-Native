import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetailScreen from './PostDetailScreen';
import * as likePostActions from '../../actions/likePostActions';
import * as unLikePostActions from '../../actions/unLikePostActions';
import * as navigationActions from '../../actions/navigationActions';
import * as reportAdminActions from '../../actions/reportAdminActions';

class PostDetailScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <PostDetailScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        students_info:state.loginReducer.students_info,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestLikePost:(token,post_id,index,item)=>{
            dispatch(
                likePostActions.requestLikePost(token,post_id,index,item)
            )
        },
        navigateToCommentsListScreen:(item)=>{
            navigationActions.navigateToCommentsListScreen(item)
        },
        requestReport:(token,post_id)=>{
            dispatch(reportAdminActions.requestReport(token,post_id))
        },
        requestUnLikePost:(token,post_id,index,item)=>{
            dispatch(
                unLikePostActions.requestUnLikePost(token,post_id,index,item)
            )
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailScreenContainer);
