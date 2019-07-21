import React, { Component } from 'react';
import SignUpImageScreen from './SignUpImageScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as registerActions from '../../actions/registerActions';

class SignUpImageScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SignUpImageScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        isRegisterLoading:state.loadingReducer.isRegisterLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToHomeScreen: () =>
        navigationActions.navigateToHomeScreen(),
        navigateToPrivacyPolicyScreen: () =>
        navigationActions.navigateToPrivacyPolicyScreen(),
        navigateToTermsOfServicesScreen: () =>
        navigationActions.navigateToTermsOfServicesScreen(),
        navigateToDisclaimerScreen: () =>
        navigationActions.navigateToDisclaimerScreen(),
        requestRegister:(username,password,mobile_number,email,student_fname,student_lname,dob,student_address,student_country,state,school,studentid,student_photo,student_idfront,student_idback,reffaral_code)=>{
            dispatch(registerActions.requestRegister(username,password,mobile_number,email,student_fname,student_lname,dob,student_address,student_country,state,school,studentid,student_photo,student_idfront,student_idback,reffaral_code ))
        },
        navigateToAboutUsScreen:()=>
        navigationActions.navigateToAboutUsScreen()
       
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpImageScreenContainer);