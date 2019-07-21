import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditPostScreen from './EditPostScreen';
import * as UpdatePostAction from '../../actions/UpdatePostAction';
import * as navigationActions from '../../actions/navigationActions';

class EditPostScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EditPostScreen {...this.props} />;
    }
}

function mapStateToProps(state,props) {
    return {
        data:state.userDetailsReducer.data,
        token:state.loginReducer.token,
        isEditLoading:state.loadingReducer.isEditLoading,
        ...props.navigation.state.params
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestEditPost:(token,post_id,content)=>{
            dispatch(UpdatePostAction.requestEditPost(token,post_id,content))
        },
        navigateToHomeScreen: (token) =>{
            navigationActions.navigateToHomeScreen(token)
            },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPostScreenContainer);

