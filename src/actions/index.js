import captureAPI from './../apis/captureScreenAPI'


export const captureScreen = (url, format, viewport, delay)=> async dispatch =>{

    try{

    const response = await captureAPI.get('/v1/urltoimage', {
        params:{
            access_key:"<YOUR_API_KEY>",
            url:url,
            full_page:true,
            scroll_page:true,
            delay:delay,
            width:viewport.split('x')[0]*1,
            format:format


        }
    })

   
  

    const buffer =  await Buffer.from(response.data, 'binary').toString('base64')
    

    dispatch({
        type:'CAPTURE',
        payload:buffer
    })
}catch(err){


  dispatch({
        type:'CAPTURE',
        payload:`${err}`
    })



}
}


export const formatUpdate = (format)=> {
    return {
        type:'UPDATE_FORMAT',
        payload:format
    }
}
