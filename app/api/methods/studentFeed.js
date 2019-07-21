import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function studentFeed(token, student_userid) {
    return Api(
        ApiConstants.STUDENTFEED,
        { token: token, student_userid:student_userid },
        'post',
        null
    );
}
