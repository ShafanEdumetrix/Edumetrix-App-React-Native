import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function deletePost( token,post_id) {
    return Api(
        ApiConstants.DELETEPOST,
        { token: token, post_id:post_id },
        'post',
        null
    );
}
