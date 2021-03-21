import {CryptoUtil} from './crypto_utils'
import {MiscUtil} from './misc_utils'

function randomData () { }
randomData.generateUID= async (baseInfo) => {
    //邮箱+随机盐使用SHA256算法生成
    let arry = baseInfo+MiscUtil.arrayBufferToString(CryptoUtil.generateSalt());
    console.log(arry)
    let ID = await window.crypto.subtle.digest('SHA-256',MiscUtil.stringToArrayBuffer(arry))
    console.log(ID)
    return MiscUtil.arrayBufferToString(ID);
}
randomData.generateRecovery= () =>{
    //6位大写字母+数字的随机组合
    let recovery = '';
    const _random_ = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i<6;i++){
        let index = Math.floor((Math.random()*35)+1);
        recovery+=_random_[index];
    }
    console.log(recovery);
    return recovery;
}
randomData.generateRecordID= () =>{
    //
}

export {randomData}
