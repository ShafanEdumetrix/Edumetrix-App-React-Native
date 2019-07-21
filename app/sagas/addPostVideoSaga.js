
import { put, call,select} from 'redux-saga/effects';
import addPostVideo from 'app/api/methods/addPostVideo';
import * as addPostVideoActions from 'app/actions/addPostVideoActions';
import * as homeActions from "app/actions/homeActions";
import home from "app/api/methods/home";
import Snackbar from 'react-native-snackbar';

export const reducerStates = state => {
    return {
      token: state.loginReducer.token,
      data: state.homeReducer.data
    };
  };

 
// Our worker Saga that logins the user
export default function* addPostVideoAsync(action) {
    let loginState = yield select(reducerStates);
    const { params } = action;
    const formData = new FormData();    
    Object.keys(params).map(item => {
        console.log("vhgvnvb",params[item].uri);

        if(item === 'video') {
            let fileExtension = params[item].uri;
            // .split(".").pop();
            let fileName = params[item].uri;
            // .split("/").pop();
            console.log('fileEcxtention', fileExtension, fileName);
            formData.append(item, {
                name: fileName,
                uri: params[item].uri,
                type: 'video/mp4',
            });
        } else {  
            formData.append(item, params[item])
        }
    });
    yield put(homeActions.enableLoader());

    try {
        const response = yield call(addPostVideo, formData);
        let val = JSON.parse(response);
    if (val.status == 200) {
        yield put(addPostVideoActions.addPostVideoResponse( response));
        const responseList = yield call(home, loginState.token, 0);
        if (responseList) {
            let newResponseList = [...responseList.newsfeeds, ...loginState.data];
            yield put(homeActions.onHomeResponse(newResponseList));
          }
    }
    Snackbar.show({
        title: "Added Video Post Sucessfully",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: "grey"
        }); 
    yield put(homeActions.disableLoader());

}
    catch (error) {
        alert(error);
        yield put(addPostVideoActions.addPostVideoFailed());
        yield put(homeActions.disableLoader());

    }
}
