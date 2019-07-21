import React, { Component } from 'react';
import CommentsListScreen from './CommentsListScreen';
import { connect } from 'react-redux';
import * as getCommentsActions from '../../actions/getCommentsActions';
import * as commentPostActions from '../../actions/commentPostActions';

class CommentsListScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <CommentsListScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        isGetComments:state.loadingReducer.isGetComments,
        data:state.getCommentsListReducer.data,
        userData:state.userDetailsReducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
       requestComments:(token,post_id)=>{
           dispatch(getCommentsActions.requestComments(token,post_id))
       },
       requestComment:(token,post_id,comment)=>{
           dispatch(commentPostActions.requestComment(token,post_id,comment))
       }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsListScreenContainer);
