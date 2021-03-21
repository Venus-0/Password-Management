import {
  request
} from './request'
import {
  CryptoUtil
} from './crypto_utils'
import {
  MiscUtil
} from './misc_utils'
import {APIconfig} from './connection'
function login() {}
//检查用户名是否存在
login.checkMail = async (mail) => {
  let data = await request.getRequest(request.sendRequest('GET', 'http://172.20.10.2:8080/api/user/login/phase-1?mail=' + mail));
  return data; //返回到前端处理
}
login.processData = (jsonData) => {
  // let processedData = {cipher:'',iv:'',salt:''};
  // let ivIndex = jsonData.indexOf('.');
  // let saltIndex = jsonData.lastIndexOf('.')
  let processedData = jsonData.split('.');
  console.log(processedData);
  return processedData;
}
login.decrypt = async (data, pwd, mail) => {
  //data和pwd为前端传入
  //使用密码解密UID
  //用解密的UID解密私钥
  //用私钥解密token
  //保存token、UID
  //数据使用AES-256-CBC加密，token使用RSA-OAEP 2048bit加密
  let userID = data.userId;
  let processedData = login.processData(userID);
  let salt_enCoded_pwd = MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedData[2])); //解码后的salt
  console.log(salt_enCoded_pwd)
  let pwd_key = await CryptoUtil.importKey(pwd, salt_enCoded_pwd)
  let UID_decrypted = await CryptoUtil.decryptAES(processedData[0], pwd_key, MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedData[1])));
  console.log(UID_decrypted)

  let processedKey = login.processData(data.userPrivate);
  let salt_enCode_uid = MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedKey[2])); //解码的salt
  console.log(salt_enCode_uid);
  let UID_key = await CryptoUtil.importKey(UID_decrypted, salt_enCode_uid);
  let key_decrypted = await CryptoUtil.decryptAES(processedKey[0], UID_key, MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedKey[1])));
  console.log(key_decrypted)
  let privateKey = MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(key_decrypted))
  let accessToken = await CryptoUtil.decryptRSA(data.token, await CryptoUtil.importPrivateKey(privateKey))
  console.log(key_decrypted)
  console.log(accessToken);
  let response = await login.sendToken(accessToken, mail)
  console.log(response)
  if (response.code == 0) {
    return 1;
  }


}
login.sendToken = async (token, mail) => {
  let response = await request.getRequest(request.sendRequest('GET', 'http://172.20.10.2:8080/api/user/login/phase-2?mail=' + mail + '&token=' + token));
  return JSON.parse(response);
}
export {
  login
}
