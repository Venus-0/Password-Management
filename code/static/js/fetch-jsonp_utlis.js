import fetchJSONP from 'fetch-jsonp'


function getImg (){
    fetchJSONP('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1').then(res =>{
        return res.json();
    }).then( json =>{
        console.log('parsed json',json);
    }).catch(ex =>{
        console.log('parsing failed',ex);
    })
}

export {getImg}