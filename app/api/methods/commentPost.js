import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function commentPost( token,
    post_id,
    comment) {
    return Api(
        ApiConstants.COMMENTPOST,
        { token: token, post_id:post_id, comment:comment },
        'post',
        null
    );
}
