import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function addPostImage(formData) {
    return Api(
        ApiConstants.ADDPOSTIMAGE,
        null,
        'post',
        formData,
        null,
        true
    );
}
