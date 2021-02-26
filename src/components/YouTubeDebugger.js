// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleClick = e => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, ()=>{console.log(this.state)})
    }

    handleResolution = e => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, ()=>{console.log(this.state)})
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={ this.handleClick }>Click</button>
                <button className="resolution" onClick={ this.handleResolution }>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger