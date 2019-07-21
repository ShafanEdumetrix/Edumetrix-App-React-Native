/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import homeSaga from './homeSaga';
import getAllStudentSaga from './getAllStudentSaga';
import getAllUserAddedPostSaga from './getAllUserAddedPostSaga';
import likePostSaga from './likePostSaga';
import getChatListSaga from './getChatListSaga';
import getChatDetailSaga from './getChatDetailSaga';
import sendChatSaga from './sendChatSaga';
import studentFeedSaga from './studentFeedSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import getEarningsListSaga from './getEarningsListSaga';
import registerSaga from './registerSaga';
import editProfileSaga from './editProfileSaga';
import userDetailsSaga from './userDetailsSaga';
import addBankSaga from './addBankSaga';
import getCommentsSaga from './getCommentsSaga';
import getCountrySaga from './getCountrySaga';
import getStateSaga from './getStateSaga';
import reportAdminSaga from './reportAdminSaga';
import requestPaymentSaga from './requestPaymentSaga';
import getAllPaymentSaga from './getAllPaymentSaga';
import notificationSaga from './notificationSaga';
import readNotificationSaga from './readNotificationSaga';
import commentPostSaga from './commentPostSaga';
import textFeedSaga from './textFeedSaga';
import unLikePostSaga from './unLikePostSaga';
import addPostImageSaga from './addPostImageSaga';
import changePasswordSaga from './changePasswordSaga';
import followersListSaga from './followersListSaga';
import followingsListSaga from './followingsListSaga';
import suggestionsListSaga from './suggestionsListSaga';
import deletePostSaga from './deletePostSaga';
import followStudentSaga from './followStudentSaga';
import unFollowStudentSaga from './unFollowStudentSaga';
import followSaga from './followSaga';
import unFollowSaga from './unFollowSaga';
import followSuggestSaga from './followSuggestSaga';
import myHomeLikeSaga from './myHomeLikeSaga';
import myHomeUnlikeSaga from './myHomeUnlikeSaga';
import studentLikeSaga from './studentLikeSaga';
import studentUnlikeSaga from './studentUnlikeSaga';
import addPostVideoSaga from './addPostVideoSaga';
import deleteHomePostSaga from './deleteHomePostSaga';
import UpdatePostsaga from './UpdatePostsaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]),
    yield all([takeLatest(types.HOME_REQUEST, homeSaga)]),
    yield all([takeLatest(types.ADD_POST_IMAGE_REQUEST, addPostImageSaga)]),
    yield all([takeLatest(types.ADD_POST_VIDEO_REQUEST, addPostVideoSaga)]),
    yield all([takeLatest(types.GET_ALL_STUDENT_REQUEST, getAllStudentSaga)]),
    yield all([takeLatest(types.LIKE_POST_REQUEST, likePostSaga)]),
    yield all([takeLatest(types.UNLIKE_POST_REQUEST, unLikePostSaga)]),
    yield all([takeLatest(types.GET_CHAT_LIST_REQUEST, getChatListSaga)]),
    yield all([takeLatest(types.GET_CHAT_DETAIL_REQUEST, getChatDetailSaga)]),
    yield all([takeLatest(types.SEND_CHAT_REQUEST, sendChatSaga)]),
    yield all([takeLatest(types.STUDENT_FEED_REQUEST, studentFeedSaga)]),
    yield all([takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga)]),
    yield all([takeLatest(types.GET_EARNINGS_LIST_REQUEST, getEarningsListSaga)]),
    yield all([takeLatest(types.EDIT_PROFILE_REQUEST, editProfileSaga)]),
    yield all([takeLatest(types.COMMENT_POST_REQUEST, commentPostSaga)]),
    yield all([takeLatest(types.USER_DETAILS_REQUEST, userDetailsSaga)]),
    yield all([takeLatest(types.ADD_BANK_DETAILS_REQUEST, addBankSaga)]),
    yield all([takeLatest(types.GET_COMMENTS_REQUEST, getCommentsSaga)]),
    yield all([takeLatest(types.REGISTER_REQUEST, registerSaga)]),
    yield all([takeLatest(types.GET_COUNTRIES_REQUEST, getCountrySaga)]),
    yield all([takeLatest(types.REPORT_ADMIN_REQUEST, reportAdminSaga)]),
    yield all([takeLatest(types.GET_STATES_REQUEST, getStateSaga)]),
    yield all([takeLatest(types.PAYMENT_REQUEST, requestPaymentSaga)]),
    yield all([takeLatest(types.ALL_PAYMENT_REQUEST, getAllPaymentSaga)]),
    yield all([takeLatest(types.GET_NOTIFICATION_REQUEST, notificationSaga)]),
    yield all([takeLatest(types.READ_NOTIFICATION_REQUEST, readNotificationSaga)]),
    yield all([takeLatest(types.COMMENT_POST_SUCESS, getCommentsSaga)]),
    yield all([takeLatest(types.TEXT_FEED_REQUEST, textFeedSaga)]),
    // yield all([takeLatest(types.TEXT_FEED_SUCESS, homeSaga)]),
    yield all([takeLatest(types.LIKE_POST_SUCESS, homeSaga)]),
    yield all([takeLatest(types.LIKE_POST_SUCESS, getAllUserAddedPostSaga)]),
    yield all([takeLatest(types.UNFOLLOW_STUDENT_SUCESS, followersListSaga)]),
    yield all([takeLatest(types.FOLLOW_STUDENT_SUCESS, followersListSaga)]),
    yield all([takeLatest(types.FOLLOW_STUDENT_SUCESS, studentFeedSaga)]),
    yield all([takeLatest(types.LIKE_POST_SUCESS, studentFeedSaga)]),
    yield all([takeLatest(types.UNLIKE_POST_SUCESS, studentFeedSaga)]),
    yield all([takeLatest(types.FOLLOW_STUDENT_REQUEST, followStudentSaga)]),
    yield all([takeLatest(types.FOLLOW_SUGGEST_REQUEST, followSuggestSaga)]),
    yield all([takeLatest(types.FOLLOW_REQUEST, followSaga)]),
    yield all([takeLatest(types.UNLIKE_POST_SUCESS, getAllUserAddedPostSaga)]),
    yield all([takeLatest(types.UNLIKE_POST_SUCESS, homeSaga)]),
    yield all([takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordSaga)]),
    yield all([takeLatest(types.FOLLOWERS_LIST_REQUEST, followersListSaga)]),
    yield all([takeLatest(types.FOLLOWINGS_LIST_REQUEST, followingsListSaga)]),
    yield all([takeLatest(types.SUGGESTIONS_LIST_REQUEST, suggestionsListSaga)]),
    yield all([takeLatest(types.DELETE_POST_REQUEST, deletePostSaga)]),
    yield all([takeLatest(types.DELETE_HOME_POST_REQUEST, deleteHomePostSaga)]),
    yield all([takeLatest(types.UNFOLLOW_STUDENT_REQUEST, unFollowStudentSaga)]),
    yield all([takeLatest(types.UNFOLLOW_REQUEST, unFollowSaga)]),
    yield all([takeLatest(types.DELETE_POST_SUCESS, getAllUserAddedPostSaga)]),
    yield all([takeLatest(types.MY_HOME_LIKE_POST_REQUEST, myHomeLikeSaga)]),
    yield all([takeLatest(types.MY_HOME_UNLIKE_POST_REQUEST, myHomeUnlikeSaga)]),
    yield all([takeLatest(types.STUDENT_UNLIKE_POST_REQUEST, studentUnlikeSaga)]),

    yield all([takeLatest(types.STUDENT_LIKE_POST_REQUEST, studentLikeSaga)]),

    yield all([takeLatest(types.GET_ALL_USER_ADDED_POST_REQUEST, getAllUserAddedPostSaga)]);
    yield all([takeLatest(types.EDIT_POST_REQUEST, UpdatePostsaga)]);
}
