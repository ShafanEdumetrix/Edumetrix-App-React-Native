import React, { Component } from 'react';
import TermsOfServicesScreen from './TermsOfServicesScreen';
import { connect } from 'react-redux';

class TermsOfServicesScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <TermsOfServicesScreen {...this.props} />;
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
)(TermsOfServicesScreenContainer);
