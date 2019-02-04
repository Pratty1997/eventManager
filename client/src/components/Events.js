import React from 'react';
import Post from '../containers/Post';

export default class Events extends React.Component {
    render() {
        const events = this.props.events;
        return (
            
            <div>
                <h1 className = 'post-heading'>
                    All events : 
                </h1>
                { this.props.isFetching ? <div className = "post-message"> Loading events... </div> : 
                    ( !events.length  ? <div className = "post-message"> Add a first event </div> : <Post/> )
                }
            </div>
        )
    }
}