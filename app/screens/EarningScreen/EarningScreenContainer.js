import React, { Component } from 'react';
import EarningScreen from './EarningScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as getEarningsListActions from '../../actions/getEarningsListActions';
import * as addBankDetails from '../../actions/addBankDetails';
import * as requestPaymentActions from '../../actions/requestPaymentActions';
import * as getAllPaymentActions from '../../actions/getAllPaymentActions';

class EarningScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <EarningScreen {...this.props} />;
    }
}

function mapStateToProps(state) {    
    return {
        token:state.loginReducer.token,
        isEarningsListLoading:state.loadingReducer.isEarningsListLoading,
        data:state.getEarningsListReducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToEarningDetailScreen: (item) =>
            navigationActions.navigateToEarningDetailScreen(item),
        navigateToEarningPaymentDetailsScreen: ()=>
            navigationActions.navigateToEarningPaymentDetailsScreen(),
        requestEarningsList:(token)=>{
            dispatch(getEarningsListActions.requestEarningsList(token))
        },
        addBankRequest:(token,bank_name,branch,ifsc_code,account_no,account_holder_name)=>{
            dispatch(addBankDetails.addBankRequest(token,bank_name,branch,ifsc_code,account_no,account_holder_name))
        },
        requestPayment:(token,amount)=>{
            dispatch(requestPaymentActions.requestPayment(token,amount))
        },
        requestAllPayment:(token)=>{
            dispatch(getAllPaymentActions.requestAllPayment(token))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EarningScreenContainer);
