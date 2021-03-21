const APIconfig = {
    ip :'http://172.20.10.2:8080',//接口IP地址,
    port : '8080',
    http : () =>{
        return 'http"//'+this.ip+':'+port;
    },
    https : () =>{
        return 'https://'+ip+':'+port;
    }
}
export {APIconfig}