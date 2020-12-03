'use strict'
function request(){}
//创建请求对象httprequest
request.setRequest = async () =>{
    let httprequest = new XMLHttpRequest();
    return httprequest;
}

request.sendRequest = async (data) =>{
    let httprequest = request.setRequest();
    httprequest.open('POST',null,true);//尚未设置端口
    return httprequest.send(data);
}

request.getRequest = async (res) =>{
    if(res.readyState == 4 && res.status == 200){
        let receiveData = res.response;
        return receiveData;
    }
    else{
        
    }
}

export {request};