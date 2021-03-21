import {request} from './request'
import {CryptoUtil} from './crypto_utils'
import {MiscUtil} from './misc_utils'
import {randomData} from './randomData'
import {APIconfig} from './connection'
function signup() {}

signup.processData = async (email, pwd) => {
  const data = {
    userId: '',
    mail: '',
    recoveryKey: '',
    recovery: '',
    privateKey: '',
    publicKey: ''
  }
  let userID = await randomData.generateUID(email); //明文uid
  let pwd_salt = CryptoUtil.generateSalt();//随机盐
  let pwd_iv = CryptoUtil.generateIv();//随机iv
  let aesKey = await CryptoUtil.importKey(pwd, pwd_salt); //密码aes
  let userID_encrypted = await CryptoUtil.encryptAES(userID, aesKey, pwd_iv); //密码加密uid密文
  data.userId = userID_encrypted+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(pwd_iv))+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(pwd_salt));
  let recvoeryKey = randomData.generateRecovery(); //恢复码

  let recovery_salt = CryptoUtil.generateSalt();//随机盐
  let recovery_iv = CryptoUtil.generateIv();//随机iv
  let aesRecovery = await CryptoUtil.importKey(recvoeryKey, recovery_salt); //恢复码aes
  let userID_encrypted_recovery = await CryptoUtil.encryptAES(userID, aesRecovery, recovery_iv); //恢复码加密uid密文
  data.recovery = userID_encrypted_recovery+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(recovery_iv))+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(recovery_salt));

  let uid_salt = CryptoUtil.generateSalt();//随机盐
  let uid_iv = CryptoUtil.generateIv();//随机iv
  let aesUID = await CryptoUtil.importKey(userID, uid_salt); //UIDaes
  let keyPair = await CryptoUtil.generateKeyPair();
  let publicKey = await CryptoUtil.exportPublicKey(keyPair.publicKey);
  let privateKey = await CryptoUtil.exportPrivateKey(keyPair.privateKey);

  let privateKey_encrypted = await CryptoUtil.encryptAES(privateKey, aesUID, uid_iv); //私钥密文
  data.privateKey = privateKey_encrypted+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(uid_iv))+'.'+MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(uid_salt));
  
  data.mail = email;
  data.recoveryKey = recvoeryKey;
  data.publicKey = publicKey;
  console.log(data)
  let response = JSON.parse(await request.getRequest(request.sendRequest("POST","http://172.20.10.2:8080/api/user/register",data)));
  console.log(response);
  if(response.code == 0){
      return 1;
  }else{
      return 0;
  }

}

export {signup}