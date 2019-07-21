import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function requestPayment(token,amount) {
    return Api(
        ApiConstants.REQUESTPAYMENT,
        { token: token, amount:amount },       
        'post',
        null
    );
}
