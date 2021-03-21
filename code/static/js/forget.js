import {request} from './request'
import {CryptoUtil} from './crypto_utils'
import {MiscUtil} from './misc_utils'
import {randomData} from './randomData'

function forget() {}

forget.sendMail = async (mail) => {
  let data = await request.getRequest(request.sendRequest('GET','http://172.20.10.2:8080/api/user/password/forgot-phase-1?mail='+ mail));
  if (JSON.parse(data).code == 0) {
    let verifyData= JSON.parse(data);
    console.log(verifyData)
    let res = {
      verify:verifyData.data.verifyCode,
      recovery:verifyData.data.userIdRecovery
    }
    console.log(res)
    return res;
  } else {
    alert('不存在该用户');
  }
}
forget.recovery = async (recoveryKey, userIdRecovery) => {
  let processedRecovery = userIdRecovery.split('.');
  let encryptedRecovery = processedRecovery[0];
  let iv = MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedRecovery[1]));
  let salt = MiscUtil.stringToArrayBuffer(MiscUtil.base64UrlDecode(processedRecovery[2]));
  let key = await CryptoUtil.importKey(recoveryKey, salt);
  let UID = await CryptoUtil.decryptAES(encryptedRecovery, key, iv);
  return UID;
}
forget.newPwd = async (UID, newPwd, mail) => {
  let pwd_salt = CryptoUtil.generateSalt(); //随机盐
  let pwd_iv = CryptoUtil.generateIv(); //随机iv
  let aesKey = await CryptoUtil.importKey(newPwd, pwd_salt); //密码aes
  let userID_encrypted = await CryptoUtil.encryptAES(UID, aesKey, pwd_iv); //密码加密uid密文
  let data_userId = userID_encrypted + '.' + MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(pwd_iv)) + '.' + MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(pwd_salt));
  let recvoeryKey = randomData.generateRecovery(); //恢复码

  let recovery_salt = CryptoUtil.generateSalt(); //随机盐
  let recovery_iv = CryptoUtil.generateIv(); //随机iv
  let aesRecovery = await CryptoUtil.importKey(recvoeryKey, recovery_salt); //恢复码aes
  let userID_encrypted_recovery = await CryptoUtil.encryptAES(UID, aesRecovery, recovery_iv); //恢复码加密uid密文
  let data_recovery = userID_encrypted_recovery + '.' + MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(recovery_iv)) + '.' + MiscUtil.base64UrlEncode(MiscUtil.arrayBufferToString(recovery_salt));

  let data = {
    mail: mail,
    userId: data_userId,
    userIdRecovery: data_recovery,
    recovery: recvoeryKey
  }

  let response = await request.getRequest(request.sendRequest('POST', 'http://172.20.10.2:8080/api/user/password/forgot-phase-2', data));
  if(JSON.parse(response).code == 0){
    return 1;
  }else{
    return 0;
  }
}

export {
  forget
}
