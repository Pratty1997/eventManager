import React from 'react';

export default class EditPost extends React.Component{
    makeUpdates = (e) => {
        console.log(this.props.post.id)
        const id = this.props.post.id; 
        e.preventDefault();
        console.log("clicked!")
        const newDesc = this.getDesc.value;
        const newDate = this.getDate.value;
        const newTime = this.getTime.value;
        const newFollowers = this.getFollowers.value;

        const data = {
            desc : newDesc,
            date : newDate,
            time : newTime,
            followers : newFollowers
        }
        this.props.edit(id, data);
    }

    render(){
        return(
            <div key = { this.props.post.id } className='post'>
                <form className ="form">
                    <input required type = "text" ref = {(input) => this.getDesc = input}
                    defaultValue = { this.props.post.desc } placeholder = "Enter new description"/><br/>
                    <input required type = "date" ref = {(input) => this.getDate = input}
                    defaultValue = { this.props.post.date } placeholder = "Enter new date"/><br/>
                    <input required type = "time" ref = {(input) => this.getTime = input}
                    defaultValue = { this.props.post.time } placeholder = "Enter new time"/><br/>
                    <input required type = "number" ref = {(input) => this.getFollowers = input}
                    defaultValue = { this.props.post.followers } placeholder = "Enter new followers"/><br/> 
                    <button onClick = { this.makeUpdates } >Update</button>
                </form>
            </div>
        )
    }
}