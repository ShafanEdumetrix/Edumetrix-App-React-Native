import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function followersList(token) {
    return Api(
        ApiConstants.FOLLOWERSLIST,
        { token: token },        
        'post',
        null
    );
}
