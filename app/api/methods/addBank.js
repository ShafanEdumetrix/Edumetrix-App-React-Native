import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function addBank(token,bank_name,branch,ifsc_code,account_no,account_holder_name) {
    return Api(
        ApiConstants.ADDBANK,
        { token: token, bank_name:bank_name, branch:branch,ifsc_code:ifsc_code,account_no:account_no,account_holder_name:account_holder_name },
        'post',
        null
    );
}
