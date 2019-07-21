import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function editProfile(formData ) {
    return Api(
        ApiConstants.EDITPROFILE,
        null,
        'post',
        formData,
        true
    );
}
  