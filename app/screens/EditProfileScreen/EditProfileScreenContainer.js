import React, { Component } from 'react';
import EditProfileScreen from './EditProfileScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as editProfileActions from '../../actions/editProfileActions';
import * as userDetailsActions from '../../actions/userDetailsActions';

class EditProfileScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EditProfileScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        data:state.userDetailsReducer.data,
        token:state.loginReducer.token,
        isEditLoading:state.loadingReducer.isEditLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToHomeScreen: () =>
        navigationActions.navigateToHomeScreen(),
        requestEditProfile:( dob,student_fname,student_lname,student_country,state,student_address,school,studentid,student_photo,student_idfront,student_idback,student_phone,student_email,token)=>{
            dispatch(editProfileActions.requestEditProfile( dob,student_fname,student_lname,student_country,state,student_address,school,studentid,student_photo,student_idfront,student_idback,student_phone,student_email,token))
        },
        requestUser:(token)=>{
            dispatch(userDetailsActions.requestUser(token))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfileScreenContainer);
