import * as requestApi from './configRequest';

export const postLogin = function(parameters = {}) {
    let path = '/auth/login';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};
    if (parameters['username'] === undefined) {
        return Promise.reject(new Error('Missing required parameter: username'));
    }
    if (parameters['username'] !== undefined) {
        jsonBody['username'] = parameters['username'];
    }

    if (parameters['password'] === undefined) {
        return Promise.reject(new Error('Missing required parameter: password'));
    }
    if (parameters['password'] !== undefined) {
        jsonBody['password'] = parameters['password'];
    }

    queryParameters = requestApi.mergeQueryParams(parameters, queryParameters);
    return requestApi.request(
        'POST',
        requestApi.getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        requestApi.getConfig(parameters)
    );
};

export const postVerifyUser = function(parameters = {}) {
    let path = '/auth/verify-user';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    queryParameters = requestApi.mergeQueryParams(parameters, queryParameters);
    return requestApi.request(
        'POST',
        requestApi.getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        requestApi.getConfig(parameters)
    );
};

export const postLogout = function(parameters = {}) {
    let path = '/auth/logout';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    queryParameters = requestApi.mergeQueryParams(parameters, queryParameters);
    return requestApi.request(
        'POST',
        requestApi.getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        requestApi.getConfig(parameters)
    );
};