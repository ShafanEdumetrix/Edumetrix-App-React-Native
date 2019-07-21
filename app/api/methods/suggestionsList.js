import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function suggestionsList(token) {
    return Api(
        ApiConstants.SUGGESTIONSLIST,
        { token: token },        
        'post',
        null
    );
}
