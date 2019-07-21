import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function changePassword(token,old_password,password) {
    return Api(
        ApiConstants.CHANGEPASSWORD,
        { token: token, old_password:old_password, password:password },
        'post',
        null
    );
}
