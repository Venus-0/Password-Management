import request from './request'
import CryptoUtil from './crypto_utils'
import MiscUtil from './misc_utils'
function login() {}
//检查用户名是否存在
login.checkMail = async(mail) => {
    let data = await request.getRequest(request.sendRequest('GET','/user/login/phase-1?username=${'+mail+'}',mail));
    return data;
}
login.processData = (jsonData) =>{
    let processedData = {cipher:'',iv:'',salt:''};
    let viIndex = jsonData.indexOf('.');
    let saltIndex = jsonData.lastIndexOf('.')
    processedData.cipher = jsonData.slice(0,viIndex);//未解密的UID
    processedData.iv = jsonData.slice(viIndex+1,saltIndex);//未解码的向量
    processedData.salt = jsonData.slice(saltIndex+1);//未解码的盐
    return processedData;
}
login.decrypt = async(data,pwd) =>{
    //使用密码解密UID
    //用解密的UID解密私钥
    //用私钥解密token
    //保存token、UID
    //全程使用AES-256-CBC加密
    let data2Json = JSON.parse(data);
    let userID = data2Json.userid;
    let processedData = login.processData(userID);
    let salt_enCoded = MiscUtil.base64UrlDecode(processedData.salt);//解码后的salt
    let UID_decrypted = CryptoUtil.decryptAES(processedData.cipher,pwd,MiscUtil.base64UrlDecode(processedData.iv));
    if(!UID_decrypted.isData){
        return;//密码无法解密UID 密码错误
    }else{
        let processedKey = login.processData(data2Json.user_private);
        let key_decrypted =  CryptoUtil.decryptAES(processedKey.cipher,pwd,MiscUtil.base64UrlDecode(processedKey.iv));
        
    }
}