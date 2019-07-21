import React, { Component } from 'react';
import ChatDetailScreen from './ChatDetailScreen';
import { connect } from 'react-redux';
import * as getChatDetailActions from '../../actions/getChatDetailActions';
import * as sendChatActions from '../../actions/sendChatActions';
import * as navigationActions from '../../actions/navigationActions';

class ChatDetailScreenContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ChatDetailScreen {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        data:state.getChatDetailReducer.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        requestChatDetail:(token,receiver_id)=>{
            dispatch(getChatDetailActions.requestChatDetail(token,receiver_id))
        },
        navigateToChatScreen: (token) =>{
        navigationActions.navigateToChatScreen(token)
        },

        requestChat:(token,receiver_id,message)=>{
            dispatch(sendChatActions.requestChat(token,receiver_id,message))
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatDetailScreenContainer);
