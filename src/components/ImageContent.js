import React from 'react'
import {connect} from 'react-redux'



const ImageContent = (props) =>{



    const loading = ()=>{
        return(
            <div>
            <div className="ui medium header">This may take some time!!!</div>
            <div className="ui segment">
                 <p></p>
            <div className="ui active dimmer">
            <div className="ui loader"></div>
                </div>
            </div>
            </div>
        )
    }

    if(!props.capture.includes('Error') && props.capture.length > 0 ){
    return(
        <div>
            <div className="ui segment">
                
            
                <img className="ui fluid image" src={`data:image/${props.format};base64,`+ props.capture} alt="no-img"  />
                <a className="ui primary button" href={`data:image/${props.format};base64,`+ props.capture} download="img">
                    Download | <i className="download icon"></i>
                </a>
            </div>
        </div>
    )
    }else if(props.capture.includes('Error')){
       return (
        <div className="ui negative message">
        <div className="header">
          Something Went wrong !
        </div>
        <p>The website is blocking this feature </p>
        </div>
       )
    }else{
        return loading()
    }
}


const mapStateToProps = (state)=>{

    return {
        capture: state.capture,
        format:state.format
    }
}

export default connect(mapStateToProps)(ImageContent)