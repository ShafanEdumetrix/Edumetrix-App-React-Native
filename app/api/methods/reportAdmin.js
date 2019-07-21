import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function reportAdmin(token, post_id) {
    return Api(
        ApiConstants.REPORTADMIN,
        { token: token, post_id:post_id },
        'post',
        null
    );
}
