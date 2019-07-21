import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function textFeed(formData) {
    return Api(
        ApiConstants.TEXTFEED,
        null,
        'post',
        formData
    );
}
 