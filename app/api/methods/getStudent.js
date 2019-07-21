import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getStudent(token,page) {
    return Api(
        ApiConstants.GETSTUDENT,
        {token:token,page:page},
        'post',
        null
    );
}
