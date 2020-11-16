const UUID = require('uuid-js')
const BKDR = require('js-hash/bkdr')
const Truncate = require('truncate')
const CryptoJS = require('crypto-js')
const JSEncrypt = require('jsencrypt')
const CLIENT_PUBLIC_KEY = ""



const transportation = {
  serverPubKey: "",
  setPubKey: function () {
    let encryptor = new JSEncrypt()
    encryptor.setPublicKey(CLIENT_PUBLIC_KEY)
  }

}

export {
    transportation
}
