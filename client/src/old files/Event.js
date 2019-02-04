import React from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { addEvent } from './actions';

class Event extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        
        const desc = this.getDesc.value;
        const date = this.getDate.value;
        const time = this.getTime.value;
        const followers = this.getFollowers.value;

        const data = {
            id : new Date(),
            desc,
            date,
            time,
            followers,
            editing : false
        }
        
        axios.post("http://localhost:4001/api/createEvent",{
            eventId : data.id,
            desc : data.desc,
            date : data.date,
            time : data.time,
            followers : data.followers
        });
        this.props.dispatch(addEvent(data));
        
        this.getDesc.value = '';
        this.getDate.value = '';
        this.getTime.value = '';
        this.getFollowers.value = '0'; 
    }

    

    render(){
        return (
            <div className='post-container'>
                <h2 className="post_heading">Add event</h2>
                <form className="form" onSubmit= {this.handleSubmit}>
                    <input required type = 'text' ref = { input => this.getDesc = input} placeholder = "Enter the event description" /> <br/>
                    <input required type = 'text' ref = { input => this.getDate = input} placeholder = "Enter event date" /> <br/>
                    <input required type = "text" ref = { input => this.getTime = input} placeholder = "Enter event time" /> <br/>
                    <input required type = "text" ref = { input => this.getFollowers = input} placeholder = "Enter event followers" defaultValue="0"/><br/>
                    <button> Add </button>
                </form>
            </div>
        )
    }
}

export default connect()(Event);