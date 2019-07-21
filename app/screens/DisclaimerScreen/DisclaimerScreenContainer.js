import React, { Component } from 'react';
import DisclaimerScreen from './DisclaimerScreen';
import { connect } from 'react-redux';

class DisclaimerScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DisclaimerScreen {...this.props} />;
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
)(DisclaimerScreenContainer);
