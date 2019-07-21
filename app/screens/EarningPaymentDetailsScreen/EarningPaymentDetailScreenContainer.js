import React, { Component } from 'react';
import EarningPaymentDetailsScreen from './EarningPaymentDetailsScreen';
import { connect } from 'react-redux';

class EarningPaymentDetailsScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EarningPaymentDetailsScreen {...this.props} />;
    }
}

function mapStateToProps(state) {    
    return {
        data:state.allPaymentReducer.data
    };
}
function mapDispatchToProps() {
    return {
       
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EarningPaymentDetailsScreenContainer);
