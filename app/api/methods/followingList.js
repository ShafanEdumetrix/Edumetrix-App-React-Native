import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function followingList(token) {
    return Api(
        ApiConstants.FOLLOWINGSLIST,
        { token: token },        
        'post',
        null
    );
}
