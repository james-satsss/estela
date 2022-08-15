/* tslint:disable */
/* eslint-disable */
/**
 * estela API v1.0 Documentation
 * estela API Swagger Specification
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GetLogs
 */
export interface GetLogs {
    /**
     * Job logs.
     * @type {Array<string>}
     * @memberof GetLogs
     */
    logs: Array<string>;
    /**
     * Job logs count.
     * @type {number}
     * @memberof GetLogs
     */
    count: number;
}

export function GetLogsFromJSON(json: any): GetLogs {
    return GetLogsFromJSONTyped(json, false);
}

export function GetLogsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLogs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': json['logs'],
        'count': json['count'],
    };
}

export function GetLogsToJSON(value?: GetLogs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': value.logs,
        'count': value.count,
    };
}


