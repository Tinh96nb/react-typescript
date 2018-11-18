import axios from 'axios';
import { isNotCheckAuth } from 'common/utils/checkModuleAuth';
import * as jwt from 'common/helpers/jwt';

import * as qs from 'qs';
import {
    assign,
    isEmpty
} from 'lodash';
export const getDomain = (parameters) => {
    return parameters.$domain ? parameters.$domain : process.env.API_ORIGIN_VERSION;
};

export const getConfig = (parameters) => {
    return parameters.$config ? parameters.$config : {};
};


export const request = (method, url, queryParameters, jsonBody, form, config) => {
    method = method.toLowerCase();
    let keys = Object.keys(queryParameters);
    let queryUrl = url;
    if (keys.length > 0) {
        queryUrl = url + '?' + qs.stringify(queryParameters);
    }

    const defaultConfig = {
        method: method,
        responseType: 'json',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    };

    let mergedConfig;
    if (isEmpty(jsonBody) && isEmpty(form)) {
        mergedConfig = assign(defaultConfig, config);
    } else if (!isEmpty(jsonBody)) {
        /* For raw POST, PUT */
        mergedConfig = assign({
            data: jsonBody
        }, defaultConfig, config);
    } else {
        /* For form field POST, PUT */
        mergedConfig = assign({
            data: qs.stringify(form)
        }, defaultConfig, config);
    }
    if (!isNotCheckAuth()) {
        jwt.setHeaderAuthorization();
    } else {
        jwt.removeHeaderAuthorization();
    }
    return axios(queryUrl, mergedConfig)
};

export function mergeQueryParams(parameters, queryParameters) {
    if (parameters.$queryParameters) {
        Object.keys(parameters.$queryParameters)
            .forEach(function(parameterName) {
                let parameter = parameters.$queryParameters[parameterName];
                queryParameters[parameterName] = parameter;
            });
    }
    return queryParameters;
}