/*
 * Reducer actions related with login
 */
import * as types from './types';

export function updateNetworkInfoStatus(status) {
    return {
        type: types.NETWORK_INFO_STATUS,
        status
    };
}
