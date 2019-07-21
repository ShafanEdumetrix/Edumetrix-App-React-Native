import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function likePost(token,post_id) {
    return Api(
        ApiConstants.LIKEPOST,
        { token: token, post_id: post_id },        
        'post',
        null
    );
}
