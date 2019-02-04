import React from 'react';
import EditPost from './EditPost'
export default class View extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            showForm : false,
            form : < EditPost key = { props.event.id } post = { props.event } edit = { props.edit } />
        }
    }
    editEvent = () => {
        this.setState({ showForm : true });
    }
    render() {
        return (
            <div className="post-message">
                <h2> { this.props.event.desc }</h2>
                <p> 
                    Date : { this.props.event.date }<br/>
                    Time : { this.props.event.time }<br/>
                    Followers : { this.props.event.followers}<br/>
                    <button className = "edit" onClick = { this.editEvent } >
                        EDIT
                    </button>
                    <button className = "delete" onClick = { () => this.props.delete(this.props.event.id) }>
                        DELETE
                    </button>
                </p>
                <div>
                    { this.state.showForm? this.state.form : "" }
                </div>
            </div>
        )
    }
}