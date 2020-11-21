import {UUID} from "uuid-js";
import {BKDR} from "js-hash/bkdr";
import {CryptoJS} from "crypto-js";

const RSAKeys = {publicKey,privateKey};
const RSA = {
  getRsaKeys: function () {
    window.crypto.subtle.generateKey({
        name: "RSA-OAEP",
        modulusLength: 1024,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256"
      },
      true,
      ["encrypt", "decrypt"]
    ).then((keypair) => {
      window.crypto.subtle.exportKey(
        "spki",
        keypair.publicKey,
        //console.log("step 1") Test for Debug
      ).then((userPublicKey) => {
        window.crypto.subtle.exportKey(
          "pkcs8",
          keypair.privateKey,
          //console.log("step 2") Test for Debug
        ).then((userPrivateKey) => { 
        
          RSAKeys.privateKey = RSA2text(userPrivateKey),
          RSAKeys.publicKey = RSA2text(userPublicKey)
          
          //console.log("step 3") Test for Debug
        }).catch((err) => {
          console.log(err);
        })
      })
    }).catch((err) => {
      console.log(err);
    })
  },
  msgEncrypt: (unEcryptedMsg) => {
    encrypted = Encrypt.encrypt(unEcryptedMsg);
    //console.log(encrypted) Test for Debug
  },
  msgDecrypt: (encryptedMsg) => {
    decrypted = Decrypt.decrypt(encryptedMsg);
    
    //console.log(decrypted) Test for Debug
  }
}

function RSA2text(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  let base64 = window.btoa(binary);
  let text = base64.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{64}\x01?/g, "$&\n");
  //console.log("1") Test for Debug
  return text;
}

export {
  RSA,
  RSAKeys
}
