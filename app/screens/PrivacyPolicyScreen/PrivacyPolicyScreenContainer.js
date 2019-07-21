import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivacyPolicyScreen from './PrivacyPolicyScreen';

class PrivacyPolicyScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <PrivacyPolicyScreen {...this.props} />;
    }
}

function mapStateToProps() {
    return {
        
    };
}
function mapDispatchToProps() {
    return {
       
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacyPolicyScreenContainer);
