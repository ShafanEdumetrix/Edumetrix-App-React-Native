import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function userDetails(token) {
    return Api(
        ApiConstants.USERDETAILS,
        { token: token },        
        'post',
        null
    );
}
