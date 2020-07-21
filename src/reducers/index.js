import {combineReducers} from 'redux'


const captureScreenReducer = (capt=[], action)=>{

    switch (action.type){
        case 'CAPTURE':
            return action.payload
        default :
            return capt
    }


}

const updateFormatReducer = (format="png", action) => {

    switch (action.type){
        case "UPDATE_FORMAT":
            return action.payload;
        default :
            return format
    }

}

export default combineReducers({
    capture:captureScreenReducer,
    format:updateFormatReducer
})