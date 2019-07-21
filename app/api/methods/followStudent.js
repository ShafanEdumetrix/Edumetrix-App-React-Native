import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function followStudent(token,follow_studentuser_id) {
    return Api(
        ApiConstants.FOLLOWSTUDENT,
        { token: token, follow_studentuser_id:follow_studentuser_id },        
        'post',
        null
    );
}
