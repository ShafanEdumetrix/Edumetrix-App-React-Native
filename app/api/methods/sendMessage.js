import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function sendMessage(token, receiver_id, message) {
    return Api(
        ApiConstants.SENDMESSAGE,
        { token: token, receiver_id:receiver_id, message:message },
        'post',
        null
    );
}
