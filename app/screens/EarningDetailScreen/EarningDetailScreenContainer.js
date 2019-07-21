import React, { Component } from 'react';
import EarningDetailScreen from './EarningDetailScreen';
import { connect } from 'react-redux';

class EarningDetailScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EarningDetailScreen {...this.props} />;
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
)(EarningDetailScreenContainer);
