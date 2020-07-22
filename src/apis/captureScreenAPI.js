import axios from 'axios'

export default axios.create({
    baseURL:"https://api.apiflash.com",
    responseType: 'arraybuffer',  
  
    
})

