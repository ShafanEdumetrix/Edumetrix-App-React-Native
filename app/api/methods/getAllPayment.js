import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getAllPayment(token) {
    return Api(
        ApiConstants.GETALLPAYMENT,
        { token: token },
        'post',
        null
    );
}
