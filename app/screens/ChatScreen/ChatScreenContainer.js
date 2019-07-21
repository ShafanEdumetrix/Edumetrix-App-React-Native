import React, { Component } from 'react';
import ChatScreen from './ChatScreen';
import { connect } from 'react-redux';
import * as navigationActions from '../../actions/navigationActions';
import * as getChatListActions from '../../actions/getChatListActions';

class ChatScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ChatScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.getChatReducer.data,
        isChatLoading:state.loadingReducer.isChatLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToHomeScreen: (token) =>{
            navigationActions.navigateToHomeScreen(token)
            },
            
        navigateToChatDetailScreen: (item) =>
            navigationActions.navigateToChatDetailScreen(item),

          
        requestChatList:(token)=>{
            dispatch(getChatListActions.requestChatList(token));
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatScreenContainer);
