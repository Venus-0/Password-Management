'use strict'
function request(){}
//创建请求对象httprequest,支持ie5、ie6
request.setRequest = async () =>{
    var httprequest;
    if(window.XMLHttpRequest){
        httprequest = new XMLHttpRequest();
    }
    else{
        httprequest = new ActiveXObject('Microsoft.XMLHTTP');
    }
}

request.sendRequest = async (data) =>{
    httprequest.open('POST',null,true);
    httprequest.send(data);
}

request.getRequest = async () =>{

}