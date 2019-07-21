/*
 * Reducer actions related with register
 */
import * as types from './types';

export function requestRegister(username,password,mobile_number,email,student_fname,student_lname,dob,student_address,student_country,state,school,studentid,student_photo,student_idfront,student_idback,reffaral_code){
    return {
        type: types.REGISTER_REQUEST,
        params: {
            username,
            password,
            mobile_number,
            email,
            student_fname,
            student_lname,
            dob,
            student_address,
            student_country,
            state,school,
            studentid,
            student_photo,
            student_idfront,
            student_idback,
            reffaral_code
        }
    };
}

export function registerFailed() {
    return {
        type: types.REGISTER_FAILED
    };
}

export function onRegisterResponse(response) {
    return {
        type: types.REGISTER_RESPONSE,
        response
    };
}


export function onRegisterTokenUpdate(response) {
    return {
        type: types.REGISTER_TOKEN_UPDATE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.REGISTER_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.REGISTER_DISABLE_LOADER
    };
}