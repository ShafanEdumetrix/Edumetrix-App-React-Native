import React, { Component } from 'react';
import AboutUsScreen from './AboutUsScreen';
import { connect } from 'react-redux';

class AboutUsScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AboutUsScreen {...this.props} />;
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
)(AboutUsScreenContainer);
