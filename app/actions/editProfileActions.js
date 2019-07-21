/*
 * Reducer actions related with edit profile
 */
import * as types from './types';

export function requestEditProfile(dob,student_fname,student_lname,student_country,state,student_address,school,studentid,student_photo,student_idfront,student_idback,student_phone,student_email,token){
    return {
        type: types.EDIT_PROFILE_REQUEST,
        params: {
            dob,student_fname,student_lname,student_country,state,student_address,school,studentid,student_photo,student_idfront,student_idback,student_phone,student_email,token
        }
    };
}

export function editProfileFailed() {
    return {
        type: types.EDIT_PROFILE_FAILED
    };
}

export function onEditProfile(response) {
    return {
        type: types.EDIT_PROFILE_RESPONSE,
        response
    };
}

export function onEditProfileUpdate(params) {
    return {
        type: types.EDIT_PROFILE_UPDATE,
        params
    };
}

export function enableLoader() {
    return {
        type: types.EDIT_PROFILE_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.EDIT_PROFILE_DISABLE_LOADER
    };
}