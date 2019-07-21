import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getComments(token,post_id) {
    return Api(
        ApiConstants.GETCOMMENTS,
        { token: token, post_id: post_id },        
        'post',
        null
    );
}
 