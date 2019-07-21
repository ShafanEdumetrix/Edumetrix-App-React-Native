import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function readNotification(token,notification_id) {
    return Api(
        ApiConstants.READNOTIFICATION,
        { token: token, notification_id:notification_id },        
        'post',
        null
    );
}
