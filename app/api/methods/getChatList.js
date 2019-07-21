import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getChatList(token) {
    return Api(
        ApiConstants.GETCHATLIST,
        { token: token },        
        'post',
        null
    );
}
 