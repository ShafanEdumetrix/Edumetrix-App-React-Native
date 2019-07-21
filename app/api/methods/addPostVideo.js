import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function addPostVideo(formData) {
    return Api(
        ApiConstants.ADDPOSTVIDEO,
        null,
        'post',
        formData,
        null,
        true
    );
}
