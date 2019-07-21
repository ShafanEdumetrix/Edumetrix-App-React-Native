/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoginLoading: false,
    isHomeLoading:false,
    isChatLoading:false,
    isStudentLoading:false,
    isStudentFeedLoading:false,
    isGetAllUserPost:false,
    isEarningsListLoading:false,
    isRegisterLoading:false,
    isEditLoading:false,
    isGetComments:false,
    isNotifLoading:false,
    isFollowerListLoading:false,
    isFollowingListLoading:false,
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state) {
        return { ...state, isLoginLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state) {
        return { ...state, isLoginLoading: false };
    },
    [types.HOME_ENABLE_LOADER](state) {
        return { ...state, isHomeLoading: true };
    },
    [types.HOME_DISABLE_LOADER](state) {
        return { ...state, isHomeLoading: false };
    },
    [types.GET_CHAT_ENABLE_LOADER](state) {
        return { ...state, isChatLoading: true };
    },
    [types.GET_CHAT_DISABLE_LOADER](state) {
        return { ...state, isChatLoading: false };
    },
    [types.GET_ALL_STUDENT_ENABLE_LOADER](state) {
        return { ...state, isStudentLoading: true };
    },
    [types.GET_ALL_STUDENT_DISABLE_LOADER](state) {
        return { ...state, isStudentLoading: false };
    },
    [types.STUDENT_FEED_ENABLE_LOADER](state) {
        return { ...state, isStudentFeedLoading: true };
    },
    [types.STUDENT_FEED_DISABLE_LOADER](state) {
        return { ...state, isStudentFeedLoading: false };
    },
    [types.GET_ALL_USER_ADDED_ENABLE_LOADER](state) {
        return { ...state, isGetAllUserPost: true };
    },
    [types.GET_ALL_USER_ADDED_DISABLE_LOADER](state) {
        return { ...state, isGetAllUserPost: false };
    },
    [types.GET_EARNINGS_LIST_ENABLE_LOADER](state) {
        return { ...state, isEarningsListLoading: true };
    },
    [types.GET_EARNINGS_LIST_DISABLE_LOADER](state) {
        return { ...state, isEarningsListLoading: false };
    },
    [types.REGISTER_ENABLE_LOADER](state) {
        return { ...state, isRegisterLoading: true };
    },
    [types.REGISTER_DISABLE_LOADER](state) {
        return { ...state, isRegisterLoading: false };
    },
    [types.EDIT_PROFILE_ENABLE_LOADER](state) {
        return { ...state, isEditLoading: true };
    },
    [types.EDIT_PROFILE_DISABLE_LOADER](state) {
        return { ...state, isEditLoading: false };
    },
    [types.GET_COMMENTS_ENABLE_LOADER](state) {
        return { ...state, isGetComments: true };
    },
    [types.GET_COMMENTS_DISABLE_LOADER](state) {
        return { ...state, isGetComments: false };
    },
    [types.NOTIFICATIONLIST_ENABLE_LOADER](state) {
        return { ...state, isNotifLoading: true };
    },
    [types.NOTIFICATIONLIST_DISABLE_LOADER](state) {
        return { ...state, isNotifLoading: false };
    },
    [types.FOLLOWERS_LIST_ENABLE_LOADER](state) {
        return { ...state, isFollowerListLoading: true };
    },
    [types.FOLLOWERS_LIST_DISABLE_LOADER](state) {
        return { ...state, isFollowerListLoading: false };
    },
    [types.FOLLOWINGS_LIST_ENABLE_LOADER](state) {
        return { ...state, isFollowingListLoading: true };
    },
    [types.FOLLOWINGS_LIST_DISABLE_LOADER](state) {
        return { ...state, isFollowingListLoading: false };
    },
    [types.EDIT_POST_ENABLE_LOADER](state) {
        return { ...state, isEditLoading: true };
    },
    [types.EDIT_POST_DISABLE_LOADER](state) {
        return { ...state, isEditLoading: false };
    },
});
