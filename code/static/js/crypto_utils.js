'use strict';
function CryptoUtil() {}

// 生成一个RSA 2048密钥对
// @return CryptoKeyPair 生成的密钥对对象
CryptoUtil.generateKeyPair = async () => {
    let keyPair = await window.crypto.subtle.generateKey({
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
    }, true, ["encrypt", "decrypt"]);

    return keyPair;
}

// 生成一个随机AES-256-CBC密钥
// @return CryptoKey 生成的AES密钥对象
CryptoUtil.generateKey = async () => {
    let key = await window.crypto.subtle.generateKey({
        name: "AES-CBC",
        length: 256
    }, true, ["encrypt", "decrypt"]);

    return key;
}

// 使用指定格式导出公钥
// @params CryptoKey key 需要导出的公钥对象
// @return string 使用base64编码的公钥
CryptoUtil.exportPublicKey = async (key) => {
    let publicKey = new Uint8Array(await window.crypto.subtle.exportKey("spki", key));
    return MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(publicKey));
}

// 使用指定格式导出私钥
// @params CryptoKey key 需要导出的私钥对象
// @return string 使用base64编码的私钥
CryptoUtil.exportPrivateKey = async (key) => {
    let privateKey = new Uint8Array(await window.crypto.subtle.exportKey("pkcs8", key));
    return MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(privateKey));
}

// 使用指定格式导出AES密钥
// @params CryptoKey key 需要导出的AES密钥对象
// @return string 使用base64编码的AES密钥
CryptoUtil.exportKey = async (key) => {
    let aesKey = new Uint8Array(await window.crypto.subtle.exportKey("raw", key));
    return MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(aesKey));
}

// 使用指定格式导入公钥
// @params ArrayBuffer key 二进制状态的公钥
// @return CryptoKey 导入的公钥对象
CryptoUtil.importPublicKey = async (key) => {
    let publicKey = await window.crypto.subtle.importKey("spki", key, {
        name: "RSA-OAEP",
        hash: "SHA-256"
    }, true, ["encrypt"]);

    return publicKey;
}

// 使用指定格式导入私钥
// @params ArrayBuffer key 二进制状态的私钥
// @return CryptoKey 导入的私钥对象
CryptoUtil.importPrivateKey = async (key) => {
    let privateKey = await window.crypto.subtle.importKey("pkcs8", key, {
        name: "RSA-OAEP",
        hash: "SHA-256"
    }, true, ["decrypt"]);

    return privateKey;
}

// 使用特定的字符串数据导入生成AES密钥
// @params ArrayBuffer key 二进制状态的AES密钥
// @return CryptoKey 导入的AES密钥对象
CryptoUtil.importKey = async (key) => {
    let buffer = MiscUtil.stringToArrayBuffer(key);
    let pbkdf2Key = await window.crypto.subtle.importKey("raw", buffer, "PBKDF2", false, ["deriveBits", "deriveKey"]);
    let aesKey = await window.crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt: window.crypto.getRandomValues(new Uint8Array(16)),
        iterations: 100000,
        hash: "SHA-256"
    }, pbkdf2Key, {
        name: "AES-CBC",
        length: 256
    }, true, ["encrypt", "decrypt"]);

    return aesKey;
}

// 生成一个随机的16位初始向量IV
// @return Uint8Array 随机生成的IV
CryptoUtil.generateIv = () => {
    return window.crypto.getRandomValues(new Uint8Array(16));
}

// 使用AES-256-CBC加密
// @params string text 需要加密的明文
// @params CryptoKey key 密钥对象
// @params Uint8Array iv 初始向量IV
// @return string 使用base64编码的密文
CryptoUtil.encryptAES = async (text, key, iv) => {
    let encrypted = await window.crypto.subtle.encrypt({
        name: "AES-CBC",
        iv: iv
    }, key, MiscUtil.stringToArrayBuffer(text));

    return MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(encrypted));
}

// 使用RSA-OAEP 2048bit加密
// @params string text 需要加密的明文
// @params CryptoKey key 公钥对象
// @return string 使用base64编码的密文
CryptoUtil.encryptRSA = async (text, key) => {
    let encrypted = await window.crypto.subtle.encrypt({
        name: "RSA-OAEP"
    }, key, MiscUtil.stringToArrayBuffer(text));

    return MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(encrypted));
}

// 使用AES-256-CBC解密
// @params string cipher 密文
// @params CryptoKey key 密钥对象
// @params Uint8Array iv 初始向量IV
// @return string 解密的明文
CryptoUtil.decryptAES = async (cipher, key, iv) => {
    let decrypted = await window.crypto.subtle.decrypt({
        name: "AES-CBC",
        iv: iv
    }, key, MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(cipher)));

    return MiscUtil.arrayBufferToString(decrypted);
}

// 使用RSA-OAEP 2048bit解密
// @params string cipher 密文
// @params CryptoKey key 私钥对象
// @return string 解密的明文
CryptoUtil.decryptRSA = async (cipher, key) => {
    let decrypted = await window.crypto.subtle.decrypt({
        name: "RSA-OAEP"
    }, key, MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(cipher)));

    return MiscUtil.arrayBufferToString(decrypted);
}