import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getUserPost(token) {
    return Api(
        ApiConstants.GETUSERPOST,
        { token: token },        
        'post',
        null
    );
}
