import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as loginActions from '../../actions/loginActions';
import { statement } from '@babel/template';


class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        isLoginLoading:state.loadingReducer.isLoginLoading
    };
}
function mapDispatchToProps(dispatch) {
    
    return {
        navigateToSignUp: () =>
            navigationActions.navigateToSignUp(),
        navigateToAboutUsScreen:()=>
            navigationActions.navigateToAboutUsScreen(),
        navigateToPrivacyPolicyScreen: () =>
            navigationActions.navigateToPrivacyPolicyScreen(),
        navigateToTermsOfServicesScreen: () =>
            navigationActions.navigateToTermsOfServicesScreen(),
        navigateToDisclaimerScreen: () =>
            navigationActions.navigateToDisclaimerScreen(),
        navigateToResetPasswordScreen: () =>
            navigationActions.navigateToResetPasswordScreen(),
        requestLogin:(username,password)=>{
            dispatch(loginActions.requestLogin(username,password));
        }

    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
