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
 * @interface SpiderJobUpdate
 */
export interface SpiderJobUpdate {
    /**
     * 
     * @type {number}
     * @memberof SpiderJobUpdate
     */
    readonly jid?: number;
    /**
     * 
     * @type {string}
     * @memberof SpiderJobUpdate
     */
    status?: SpiderJobUpdateStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof SpiderJobUpdate
     */
    dataStatus?: SpiderJobUpdateDataStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof SpiderJobUpdate
     */
    dataExpiryDays?: number | null;
}

/**
* @export
* @enum {string}
*/
export enum SpiderJobUpdateStatusEnum {
    InQueue = 'IN_QUEUE',
    Waiting = 'WAITING',
    Running = 'RUNNING',
    Stopped = 'STOPPED',
    Incomplete = 'INCOMPLETE',
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    Error = 'ERROR'
}/**
* @export
* @enum {string}
*/
export enum SpiderJobUpdateDataStatusEnum {
    Persistent = 'PERSISTENT',
    Deleted = 'DELETED',
    Pending = 'PENDING'
}

export function SpiderJobUpdateFromJSON(json: any): SpiderJobUpdate {
    return SpiderJobUpdateFromJSONTyped(json, false);
}

export function SpiderJobUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpiderJobUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jid': !exists(json, 'jid') ? undefined : json['jid'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'dataStatus': !exists(json, 'data_status') ? undefined : json['data_status'],
        'dataExpiryDays': !exists(json, 'data_expiry_days') ? undefined : json['data_expiry_days'],
    };
}

export function SpiderJobUpdateToJSON(value?: SpiderJobUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'data_status': value.dataStatus,
        'data_expiry_days': value.dataExpiryDays,
    };
}

