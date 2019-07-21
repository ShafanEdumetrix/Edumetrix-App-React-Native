import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function unLikePost(token,post_id) {
    return Api(
        ApiConstants.UNLIKEPOST,
        { token: token, post_id: post_id },
        'post',
        null
    );
}
