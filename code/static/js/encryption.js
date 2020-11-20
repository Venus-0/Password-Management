import {UUID} from "uuid-js"
import {BKDR} from "js-hash/bkdr"
import {CryptoJS} from "crypto-js"
import {JSEncrypt} from 'jsencrypt'
const msg = "123456"
const Encrypt = new JSEncrypt()
const Decrypt = new JSEncrypt()
var encrypted
var decrypted
const Encyrption = {
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
        console.log("step 1")
      ).then((publicKey) => {
        window.crypto.subtle.exportKey(
          "pkcs8",
          keypair.privateKey,
          console.log("step 2")
        ).then((privateKey) => {
          let privKey = RSA2text(privateKey)
          let pubKey = RSA2text(publicKey)
          Decrypt.setPrivateKey(privKey)
          Encrypt.setPublicKey(pubKey)
          console.log("step 3")
        }).catch((err) => {
          console.log(err)
        })
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  msgEncrypt: () => {
    encrypted = Encrypt.encrypt(msg)
    console.log(encrypted)
  },
  msgDecrypt: () => {
    decrypted = Decrypt.decrypt(encrypted)
    console.log(decrypted)
  }
}

function RSA2text(buffer) {
  let binary = ''
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  let base64 = window.btoa(binary)
  let text = base64.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{64}\x01?/g, "$&\n")
  console.log("1")
  return text
}

export {
  Encyrption
}
