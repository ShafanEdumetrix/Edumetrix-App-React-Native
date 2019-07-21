import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getChatDetail(token,receiver_id) {
    return Api(
        ApiConstants.GETCHATDETAIL,
        { token: token, receiver_id:receiver_id },        
        'post',
        null
    );
}
 