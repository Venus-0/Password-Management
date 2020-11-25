'use strict';
function MiscUtil() {}

// ArrayBuffer转字符串
MiscUtil.arrayBufferToString = (buffer) => {
    let arr = new Uint8Array(buffer);
    return String.fromCharCode.apply(null, arr);
}

// 字符串转ArrayBuffer (指Uint8Array)
MiscUtil.stringToArrayBuffer = (str) => {
    let binary = new Uint16Array(str.length);
    for (let i = 0; i < binary.length; i++) {
        binary[i] = str.charCodeAt(i);
    }

    return new Uint8Array(binary);
}

// base64编码 (加号被替换成@用来网络传输)
MiscUtil.base64UrlEncode = (text) => {
    return btoa(text).replace(/\+/g, "@");
}

// base64解码
MiscUtil.base64UrlDecode = (base64) => {
    return atob(base64.replace(/\@/g, "+"));
}

export {MiscUtil}