import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getEarningsList(token) {
    return Api(
        ApiConstants.GETEARNINGSLIST,
        { token: token },        
        'post',
        null
    );
}
