import React from 'react'
import {connect} from 'react-redux'

import {captureScreen, formatUpdate} from './../actions'


class SearchBar extends React.Component{

    state={term:"", format:"png", viewport:"1440x900", delay:0 }

    onFormSubmit = (e)=>{
            e.preventDefault()
            this.props.captureScreen(this.state.term, this.state.format, this.state.viewport, this.state.delay)
            this.props.formatUpdate(this.state.format)
    }

    onClickCapture = ()=>{
         this.props.captureScreen(this.state.term, this.state.format, this.state.viewport, this.state.delay)
            this.props.formatUpdate(this.state.format)
    }

    render(){
          

        return(
            <div className="ui center aligned basic segment">
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui left icon action input">
                        <i className="search icon"></i>
                        <input type="text" placeholder="http://www.apple.com" value={this.state.term} onChange={e=>{
                            this.setState({term:e.target.value})
                        }}/>
                        <div className="ui blue submit button" onClick={this.onClickCapture}>Capture</div>
                    </div>
                </form>
                <div className="ui horizontal segments">
                    <div className="ui segment form" style={{width:"20%"}}>
                            <div className="field">
                                <h3>Format</h3>
                                <select onChange={e=>{
                                        this.setState({format:e.target.value})
                                }}>
                                    <option value="png">PNG</option>
                                    <option value="jpeg">JPEG</option>
                                </select>
                            </div>
                    </div>
                    

                    <div className="ui segment form" style={{width:"20%"}}>
                            <div className="field">
                                <h3>Size</h3>
                                <select onChange={e=>{
                                        this.setState({viewport:e.target.value})
                                }}>
                                    <option value="1440">Macbook 13</option>
                                    <option value="320x480">iPhone 4 S</option>
                                    <option value="320x568">iPhone 5 </option>
                                    <option value="375x667">iPhone 6</option>
                                    <option value="414x736">iPhone 6 Plus</option>
                                    <option value="1024x768">iPad</option>
                                    <option value="2560x1440">iMac 27</option>
                                </select>
                            </div>
                    </div>
                    <div className="ui segment form" style={{width:"20%"}}>
                            <div className="field">
                                <h4>Delay in s</h4>
                                <div className="ui input focus">
                                    <input type="number" min="0" value={this.state.delay} onChange={(e)=>{
                                        this.setState({delay:e.target.value})
                                    }} />
                                </div>
                                <div className="ui mini message">
                                        For slow loading website
                                </div>
                            </div>
                    </div>
                    </div>
                
            </div>
        )
    }
}



export default connect(null, {
    captureScreen,
    formatUpdate
})(SearchBar)