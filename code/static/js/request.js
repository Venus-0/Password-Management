function request(){}
//创建请求对象httprequest
request.setRequest = () =>{
    let httprequest = new XMLHttpRequest();
    return httprequest;
}

request.sendRequest = (type,port,data) =>{
    let httprequest = request.setRequest();
    httprequest.open(type,port,true);//尚未设置端口
    return httprequest.send(data);
}

request.getRequest = async (res) =>{
    if(res.readyState == 4 && res.status == 200){
        let receiveData = await res.response;
        return receiveData;
    }
    else{
        
    }
}

export {request};