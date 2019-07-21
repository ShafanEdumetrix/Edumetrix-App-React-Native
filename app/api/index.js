// General api to access data
import ApiConstants from './ApiConstants';
export default function api(path, params, method, formData, noheader, isText) {
    // let options;
    // options = Object.assign({
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
            
    //     },
    //     method: method,
    //     params ? { body: JSON.stringify(params) } : null,
    //     formData ? { body: formData } : null,
    // });
    // console.log("Dsfsfsdfsdfsdfsdfr545",ApiConstants.BASE_URL + path, options);
    
    const options = Object.assign(
      {
        headers: !noheader && formData ? {
          'Content-Type': 'multipart/form-data',
          // Accept: 'application/json',
          // 'Content-Type': formData ? 'application/x-www-form-urlencoded' : 'application/json',
        } : undefined,
      },
      { method },
      params ? { body: JSON.stringify(params) } : null,
      formData ? { body: formData } : null,
    );

    //alert('options', options, ApiConstants.BASE_URL + path,);
  
    return fetch(ApiConstants.BASE_URL + path, options)
        .then(resp => {
          //alert(JSON.stringify(resp));
          if (isText === true) return resp.text()
          return resp.json()

        })
        .then(json => { 
         // alert('asdsadasdasdasdas', json);
          return json})
        .catch(error => {
          //alert('asdsadasdaddssddddsdasdas', error);
          return error});
}


export function apiMedia(path, params, method) {
    let formData = new FormData();  
    formData.append("file", {
      name: fileName,
      uri: mediaDict.uri,
      type: "video/mp4"
    });
  
    formData.append("questionId", questionId);
  
    return new Promise((resolve, reject) => {
      fetch(ApiConstants.BASE_URL + path, {
        method: method,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => resolve(jsonResponse))
        .catch(error => reject(error));
    });
  }