export {Transportation}
let xmlHttp;
const Transportation = {
    get:function(){
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
    }

}
//Base64编码数据
function msgEncodeB64 (encodingMsg){
    let encodedMsgB64 = new btoa(encodingMsg);
    return encodedMsgB64;
}
//解码Base64数据
function msgDecodeB64 (decodingMsg){
    let decodedMsg = new atob(decodingMsg);
    return decodedMsg;
}

