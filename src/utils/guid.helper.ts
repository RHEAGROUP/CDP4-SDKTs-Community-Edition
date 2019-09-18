﻿/**
 * @file    guid.helper.ts
 * @company     RHEA System S.A.
 * @copyright  Copyright (c) 2016  RHEA System S.A.
 */

/**
 * A helper class to deal with Guids
 */
export module GuidHelper {
    /**
    * The empty GUID
    */
    export const emptyGuid: string = '00000000-0000-0000-0000-000000000000';

    /**
    * Generates a unique Guid to be used as a key for the ThingS
    */
    export function generateGuid() : string {
        let d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid;
    }
}