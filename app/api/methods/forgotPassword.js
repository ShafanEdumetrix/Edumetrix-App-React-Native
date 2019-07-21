import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function forgotPAssword(email) {
    return Api(
        ApiConstants.FORGOTPASSWORD,
        { email: email },        
        'post',
        null
    );
}
 