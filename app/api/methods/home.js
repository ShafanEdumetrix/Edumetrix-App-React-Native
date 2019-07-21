import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function home(token,page) {
    return Api(
        ApiConstants.HOME,
        { token: token, page: page },        
        'post',
        null
    );
}
