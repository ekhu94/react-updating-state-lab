import React from 'react';

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

    onBitClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    onResClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button 
                    className="bitrate"
                    onClick={this.onBitClick}
                >
                    Bitrate
                </button>
                <button 
                    className="resolution"
                    onClick={this.onResClick}
                >
                    Resolution
                </button>
            </div>
        );
    }
}

export default YouTubeDebugger;