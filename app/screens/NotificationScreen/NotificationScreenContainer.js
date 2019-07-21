import React, { Component } from 'react';
import NotificationScreen from './NotificationScreen';
import { connect } from 'react-redux';
import * as notificationsList from 'app/actions/notificationsList';
import * as readNotificationActions from 'app/actions/readNotificationActions';
import * as navigationActions from '../../actions/navigationActions';

class NotificationScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <NotificationScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.notificationReducer.data,
        isNotifLoading:state.loadingReducer.isNotifLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestNotification:(token)=>{
            dispatch(notificationsList.requestNotification(token))
        },
        requestReadNotification:(token,notification_id)=>{
            dispatch(readNotificationActions.requestReadNotification(token,notification_id))
        },
        navigateToHomeScreen:()=>{
            navigationActions.navigateToHomeScreen()
        },
        navigateToFindFriendsScreen:()=>{
            navigationActions.navigateToFindFriendsScreen()
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationScreenContainer);
