/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as homeReducer from './homeReducer';
import * as getStudentsReducer from './getStudentsReducer';
import * as getUserPostDataReducer from './getUserPostDataReducer';
import * as getChatReducer from './getChatReducer';
import * as getChatDetailReducer from './getChatDetailReducer';
import * as studentFeedReducer from './studentFeedReducer';
import * as getEarningsListReducer from './getEarningsListReducer';
import * as userDetailsReducer from './userDetailsReducer';
import * as getCommentsListReducer from './getCommentsListReducer';
import * as allPaymentReducer from './allPaymentReducer';
import * as notificationReducer from './notificationReducer';
import * as countryReducer from './countryReducer';
import * as stateReducer from './stateReducer';
import * as appReducer from './appReducer';
import * as followersListReducer from './followersListReducer';
import * as followingListReducer from './followingListReducer';
import * as suggestionsListReducer from './suggestionsListReducer';

export default Object.assign(loginReducer,appReducer,suggestionsListReducer,followingListReducer,followersListReducer,notificationReducer,stateReducer, countryReducer,getCommentsListReducer,allPaymentReducer,loadingReducer,userDetailsReducer,getChatReducer,getEarningsListReducer,getChatDetailReducer,studentFeedReducer,homeReducer,getStudentsReducer,getUserPostDataReducer);
