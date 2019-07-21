import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function notificationList(token) {
    return Api(
        ApiConstants.NOTIFICATIONLIST,
        { token: token },        
        'post',
        null
    );
}
