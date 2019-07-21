import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function unFollowStudent(token,follow_studentuser_id) {
    return Api(
        ApiConstants.UNFOLLOWSTUDENT,
        { token: token, follow_studentuser_id:follow_studentuser_id },        
        'post',
        null
    );
}
