import React, { Component } from 'react';
import ResetPasswordScreen from './ResetPasswordScreen';
import { connect } from 'react-redux';
import * as forgotPasswordActions from '../../actions/forgotPasswordActions';
import * as navigationActions from '../../actions/navigationActions';

class ResetPasswordScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ResetPasswordScreen {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        requestForgotPassword:(email)=>{
            dispatch(forgotPasswordActions.requestForgotPassword(email));
        },
        navigateToAboutUsScreen:()=>
            navigationActions.navigateToAboutUsScreen(),
        navigateToPrivacyPolicyScreen: () =>
        navigationActions.navigateToPrivacyPolicyScreen(),
        navigateToTermsOfServicesScreen: () =>
        navigationActions.navigateToTermsOfServicesScreen(),
        navigateToDisclaimerScreen: () =>
        navigationActions.navigateToDisclaimerScreen()
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResetPasswordScreenContainer);
