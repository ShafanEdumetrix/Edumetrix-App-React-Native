// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as homeActions from './homeActions';
import * as getAllStudentActions from './getAllStudentActions';
import * as getAllUserPostActions from './getAllUserPostActions';
import * as likePostActions from './likePostActions';
import * as editUserProfileActions from './editUserProfileActions';
import * as getChatListActions from './getChatListActions';
import * as getChatDetailActions from './getChatDetailActions';
import * as sendChatActions from './sendChatActions';
import * as studentFeedActions from './studentFeedActions';
import * as forgotPasswordActions from './forgotPasswordActions';
import * as getEarningsListActions from './getEarningsListActions';
import * as registerActions from './registerActions';
import * as editProfileActions from './editProfileActions';
import * as userDetailsActions from './userDetailsActions';
import * as addBankDetails from './addBankDetails';
import * as getCommentsActions from './getCommentsActions';
import * as getCountryActions from './getCountryActions';
import * as getStateActions from './getStateActions';
import * as reportAdminActions from './reportAdminActions';
import * as requestPaymentActions from './requestPaymentActions';
import * as getAllPaymentActions from './getAllPaymentActions';
import * as notificationsList from './notificationsList';
import * as readNotificationActions from './readNotificationActions';
import * as commentPostActions from './commentPostActions';
import * as textFeedActions from './textFeedActions';
import * as unLikePostActions from './unLikePostActions';
import * as addPostImageActions from './addPostImageActions';
import * as addPostVideoActions from './addPostVideoActions';
import * as appIntroActions from './appIntroActions';
import * as changePasswordActions from './changePasswordActions';
import * as followersListActions from './followersListActions';
import * as followingListActions from './followingListActions';
import * as suggestionsListActions from './suggestionsListActions';
import * as deletePostActions from './deletePostActions';
import * as deleteHomePostActions from './deleteHomePostActions';
import * as followStudentActions from './followStudentActions';
import * as unfollowStudentActions from './unfollowStudentActions';
import * as followActions from './followActions';
import * as unfollowActions from './unfollowActions';
import * as followSuggestActions from './followSuggestActions';
import * as myHomeLikeActions from './myHomeLikeActions';
import * as myHomeUnLikeActions from './myHomeUnLikeActions';
import * as studentLikeActions from './studentLikeActions';
import * as studentUnLikeActions from './studentUnLikeActions';
import * as UpdatePostAction from './UpdatePostAction';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    homeActions,
    getAllStudentActions,
    getAllUserPostActions,
    likePostActions,
    editUserProfileActions,
    getChatListActions,
    getChatDetailActions,
    sendChatActions,
    studentFeedActions,
    forgotPasswordActions,
    getEarningsListActions,
    registerActions,
    editProfileActions,
    userDetailsActions,
    addBankDetails,
    getCommentsActions,
    getCountryActions,
    getStateActions,
    reportAdminActions,
    requestPaymentActions,
    getAllPaymentActions,
    notificationsList,
    readNotificationActions,
    commentPostActions,
    textFeedActions,
    unLikePostActions,
    addPostImageActions,
    addPostVideoActions,
    appIntroActions,
    changePasswordActions,
    followersListActions,
    followingListActions,
    suggestionsListActions,
    deletePostActions,
    deleteHomePostActions,
    followStudentActions,
    unfollowStudentActions,
    followActions,
    unfollowActions,
    followSuggestActions,
    myHomeLikeActions,
    myHomeUnLikeActions,
    studentUnLikeActions,
    studentLikeActions,
    UpdatePostAction
);
