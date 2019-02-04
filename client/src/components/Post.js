import React from "react";
import View from './View';
export default class Post extends React.Component{
    render() {
        const events = this.props.events;
        console.log(this.props);
        return (
            <div>
                {
                    events.map((event) => 
                        <View key = { event.id } event = { event }
                            delete = { this.props.deleteEvent }
                            edit = { this.props.editEvent }
                            editing = { this.props.editing}  
                            showForm = { this.props.showForm }
                            edit = { this.props.editEvent } 
                        />
                    )
                }
            </div>
        )
    }
}