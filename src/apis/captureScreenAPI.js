import axios from 'axios'

export default axios.create({
    baseURL:"https://cors-anywhere.herokuapp.com/https://api.screenshotlayer.com/api",
    responseType: 'arraybuffer',  
    headers: {'Access-Control-Allow-Origin': '*'}
    
})

