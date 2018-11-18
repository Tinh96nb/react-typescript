import * as requestApi from './configRequest';

export const getDetailArticle = function(parameters = {}) {
    let path = '/articles';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    if (parameters['id'] === undefined) {
        return Promise.reject(new Error('Missing required parameter: id'));
    }

    queryParameters = requestApi.mergeQueryParams(parameters, queryParameters);
    return requestApi.request(
        'GET',
        requestApi.getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        requestApi.getConfig(parameters)
    );
};

export const getListArticle = function(parameters = {}) {
    let path = '/articles';
    let queryParameters = {};
    let jsonBody = {};
    let form = {};

    queryParameters = requestApi.mergeQueryParams(parameters, queryParameters);
    return requestApi.request(
        'GET',
        requestApi.getDomain(parameters) + path,
        queryParameters,
        jsonBody,
        form,
        requestApi.getConfig(parameters)
    );
};