import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getCountry() {
    return Api(
        ApiConstants.GETCOUNTRY,
        null,        
        'get',
        null
    );
}
