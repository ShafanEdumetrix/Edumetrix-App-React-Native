import React, { Component } from 'react';
import SignUpView from './SignUpView';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';

class SignUpContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SignUpView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {
        navigateToSignUpDetailsScreen: (username,password,mobilenumber,email,name,surname) =>
            navigationActions.navigateToSignUpDetailsScreen(username,password,mobilenumber,email,name,surname),
        navigateToDisclaimerScreen: () =>
            navigationActions.navigateToDisclaimerScreen(),
        navigateToAboutUsScreen:()=>
            navigationActions.navigateToAboutUsScreen(),
        navigateToTermsOfServicesScreen: () =>
            navigationActions.navigateToTermsOfServicesScreen(),
        navigateToPrivacyPolicyScreen: () =>
            navigationActions.navigateToPrivacyPolicyScreen(),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer); 