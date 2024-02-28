import axios from 'axios';

const appConfig = {
    baseURL: 'http://13.232.153.56:5544/'
}

export const endPoints = {
    signIn: 'api/v1/auth/login',
    signUp: 'api/v1/registration/signup',
};

const axiosClient = axios.create();

axiosClient.defaults.baseURL = appConfig?.baseURL

const getAuthorization = async () => await localStorage.getItem('token') || ''

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getAuthorization()}`

};


export function getRequest(URL) {
    return axiosClient.get(`/${URL}`)
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload)
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}
