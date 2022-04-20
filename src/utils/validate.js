/**
 * @param {string} str
 * @return {boolean}
 *
 */

export function isphone(str){
    console.log(str)
    return /^\d{11}/.test(str);
}

/**
 * @param {string}str
 * @return {boolean}
 *
 */

export function isemail(str){
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}