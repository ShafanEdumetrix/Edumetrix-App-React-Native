
import * as types from './types';

export function requestUnFollow(token,follow_studentuser_id,item,index) {
    return {
        type: types.UNFOLLOW_REQUEST,
        token,
        follow_studentuser_id,
        item,
        index
    };
}

export function unFollowFailed() {
    return {
        type: types.UNFOLLOW_FAILED
    };
}

export function unFollowResponse(response) {
    return {
        type: types.UNFOLLOW_RESPONSE,
        response
    };
}

export function unFollowSucess(params){
    return{
        type:types.UNFOLLOW_SUCESS,
        ...params

    }
}

