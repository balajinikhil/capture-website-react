import React from 'react'


import SearchBar from './SearchBar'
import ImageContent from './ImageContent'



class App extends React.Component{



    render(){

        return(
        
        <div className="ui container">
            <h2 className="ui center aligned icon header" style={{margin:'5%'}}>
                <i className="circular file image icon"></i>
                Capture Website
            </h2>
            
                <SearchBar />
                <ImageContent />
            </div>
        
        )
    }
}


export default App