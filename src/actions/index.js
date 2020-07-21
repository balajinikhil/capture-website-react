import captureAPI from './../apis/captureScreenAPI'


export const captureScreen = (url, format, viewport, delay)=> async dispatch =>{


    const response = await captureAPI.get('/capture', {
        params:{
            access_key:"d119240e4e1d2a24ef2701ede060c37c",
            url:url,
            fullpage:1,
            format:format,
            viewport:viewport,
            user_agent:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
            delay:delay

        }
    })

  

    const buffer =await Buffer.from(response.data, 'binary').toString('base64')

    

    dispatch({
        type:'CAPTURE',
        payload:buffer
    })

}


export const formatUpdate = (format)=> {
    return {
        type:'UPDATE_FORMAT',
        payload:format
    }
}