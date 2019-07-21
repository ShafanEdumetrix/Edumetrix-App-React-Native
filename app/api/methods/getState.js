import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getState(country_id) {
    return Api(
        ApiConstants.GETSTATE+'?country_id=' + country_id,
        null,        
        'get',
        null
    );
}
