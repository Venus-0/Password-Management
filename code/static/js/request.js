function request(){}
//创建请求对象httprequest
request.setRequest = () =>{
    let httprequest = new XMLHttpRequest();
    return httprequest;
}

request.sendRequest =  (type,port,data=null) =>{
    let httprequest = request.setRequest();
    httprequest.open(type,port,false);//尚未设置端口
    httprequest.setRequestHeader('Content-Type','application/json');
    httprequest.send(JSON.stringify(data));
    return httprequest;
}

request.getRequest = async (res) =>{
    if(res.readyState == 4 && res.status == 200){
        let receiveData =  res.response;
        return receiveData;
    }
    else{
        
    }
}

export {request};