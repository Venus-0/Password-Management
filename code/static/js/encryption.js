import {JSEncrypt} from 'jsencrypt';
const encrypt = new JSEncrypt();
const decrypt = new JSEncrypt();

const RsaEncrypt = {
    msgEncrypt : function (msg,key){
        encrypt.setPublicKey(key);
        let encrypted = encrypt.encrypt(msg);
        return encrypted;
    },
    msgDecrypt : function (encMsg,key){
        decrypt.setPrivateKey(key);
        let decrypted = decrypt.decrypt(encMsg);
        return decrypt;
    }
};
const AesEncrypt = {

};