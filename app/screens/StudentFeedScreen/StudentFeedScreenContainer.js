import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentFeedScreen from './StudentFeedScreen';
import * as studentFeedActions from '../../actions/studentFeedActions';
import * as reportAdminActions from '../../actions/reportAdminActions';
import * as navigationActions from '../../actions/navigationActions';
import * as studentLikeActions from '../../actions/studentLikeActions';
import * as studentUnLikeActions from '../../actions/studentUnLikeActions';

class StudentFeedScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <StudentFeedScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.studentFeedReducer.data,
        isStudentFeedLoading:state.loadingReducer.isStudentFeedLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestStudentFeed:(token,student_userid)=>{
            dispatch(studentFeedActions.requestStudentFeed(token,student_userid))
        },
        requestReport:(token,post_id)=>{
            dispatch(reportAdminActions.requestReport(token,post_id))
        },
        navigateToCommentsListScreen:(item)=>{
            navigationActions.navigateToCommentsListScreen(item)
        },
        requestLikeStudent:(token,post_id,index,item)=>{
            dispatch(
                studentLikeActions.requestLikeStudent(token,post_id,index,item)
            )
        },
        requestUnLikeStudent:(token,post_id,index,item)=>{
            dispatch(
                studentUnLikeActions.requestUnLikeStudent(token,post_id,index,item)
            )
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentFeedScreenContainer);
