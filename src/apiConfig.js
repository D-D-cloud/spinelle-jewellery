import axios from 'axios';


const appConfig = {
    apiDomain: 'http://13.232.153.56:5544/'
}

export const endPoints = {
    signIn: 'api/v1/auth/login',
    signUp: 'api/v1/registration/signup',
};

var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
};

let headers2 = {
    'Content-Type': 'application/json',
};

let baseUrl = appConfig.apiDomain;

export const getFullUrl = url => baseUrl + url;

export const API = {
    POST: async (url, params) => {
        console.log(" ==== API ====>", url, params)
        let token = '';
        // console.log("token", token)
        let localHeader = headers2;
        if (token) {
            localHeader.Authorization = 'Bearer ' + token;
        }

        return axios.post(url, params, { headers: localHeader });
    },
    PUT: (url, params) => {
        return axios.put(url, params);
    },
    GET: url => {
        return axios.get(url);
    },
    GET_WITH_HEADER: url => {
        return axios.get(url, headers);
    },
    GET_WITH_PARAMS: (url, params) => {
        return axios.get(url, { params: params, headers: headers2 });
    },
    POST_WITH_HEADER: (url, params, headerParams = headers) => {
        return axios.post(url, params, { headers: headerParams });
    },
    POST_WITH_QUERY_PARAMS: (url, params, headerParams = headers) => {
        return axios.post(url, null, { params: params }, { headers: headerParams });
    },
    PUT_WITH_HEADER: (url, params) => {
        return axios.put(url, params, { headers: headers });
    },
    DELETE_WITH_HEADER: (url, params) => {
        return axios.delete(url, { data: params, headers: headers });
    },
};
