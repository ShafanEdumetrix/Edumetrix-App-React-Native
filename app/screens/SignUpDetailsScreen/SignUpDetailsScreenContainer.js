import React, { Component } from 'react';
import SignUpDetailsScreen from './SignUpDetailsScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as getStateActions from '../../actions/getStateActions';
import * as getCountryActions from '../../actions/getCountryActions';

class SignUpDetailsScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <SignUpDetailsScreen {...this.props} />;
    }
}

function mapStateToProps(state) {    
    return {
        data:state.countryReducer.data,
        dataState:state.stateReducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToPrivacyPolicyScreen: () =>
        navigationActions.navigateToPrivacyPolicyScreen(),
        navigateToSignUpImageScreen: (username,password,mobilenumber,email,name,surname,selectedDate,address,Country,state,school,sid) =>
            navigationActions.navigateToSignUpImageScreen(username,password,mobilenumber,email,name,surname,selectedDate,address,Country,state,school,sid),
        navigateToDisclaimerScreen: () =>
            navigationActions.navigateToDisclaimerScreen(),
        navigateToTermsOfServicesScreen: () =>
            navigationActions.navigateToTermsOfServicesScreen(),
        requestState:(country_id)=>{
                dispatch(getStateActions.requestState(country_id))
            },
        requestAllCountry:()=>{
           dispatch( getCountryActions.requestAllCountry())
        },
        navigateToAboutUsScreen:()=>
        navigationActions.navigateToAboutUsScreen()
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpDetailsScreenContainer);