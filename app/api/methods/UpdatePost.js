import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function UpdatePost(formData) {
    return Api(
        ApiConstants.EDITPOST,
        null,
        'post',
        formData
    );
}
  