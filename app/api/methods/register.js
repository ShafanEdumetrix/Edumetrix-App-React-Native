import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function register(formData) {
    return Api(
        ApiConstants.REGISTER,
        null,
        'post',
        formData
    );
}
 