import React from 'react';
import '../index.css';

export default class Event extends React.Component {
    componentDidMount(){
        this.props.fetchEvents();
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const desc = this.getDesc.value;
        const date = this.getDate.value;
        const time = this.getTime.value;
        const followers = this.getFollowers.value;

        const data = {
            _id : new Date(),
            desc,
            date,
            time,
            followers,
            editing :false
        }
        
        this.props.addNewEvent(data);
        
        this.getDesc.value = '';
        this.getDate.value = '';
        this.getTime.value = '';
        this.getFollowers.value = '0';
    }

    render() {
        return (
            <div className = 'post-container'>
                <h2 className='post-heading'>
                    Add event
                </h2>
                <form className = 'form' onSubmit = { this.handleSubmit }>
                    <input required type = 'text' ref = { input => this.getDesc = input }
                        placeholder = 'Enter the event description' /> <br/>
                    <input required type = 'date' ref = { input => this.getDate = input }
                        placeholder = 'Enter the event date' /> <br/>
                    <input required type = 'time' ref = { input => this.getTime = input }
                        placeholder = 'Enter the event time' /> <br/>
                    <input required type = 'number' ref = { input => this.getFollowers = input}
                        defaultValue="0" placeholder = 'Enter the number of followers' /> <br/>
                    <button> Add this event </button> 
                </form>
            </div>)
    }    
}