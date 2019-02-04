import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';
import axios from 'axios'

class Events extends React.Component{

    //getDataFromDB(){
    //    fetch('http://localhost:4001/api/getEvents').then(data=>data.json()).then(event=>event.events.events).then(res=>{this.props.posts=res;console.log(this.state)});
    //}

    //componentDidMount() {
      //  this.getDataFromDB()
    //}

    render(){
        if(!this.props.posts){
            axios.get("http://localhost:4001/api/getEvents").then(data=>data.data.events.events).then(res=>this.setState({posts:res}));
            return (
                <div> Loading events...</div>
            )
        }
        else
            {        
                return(
                    <div>
                        <h1 className="post_heading">All events:</h1>
                        { this.props.posts.map((post) =>(
                            <div key = { post.id }>
                                {post.editing? <EditPost post = { post } key = {post.id} /> :
                                <Post key ={post.id} post = {post}/>
                                }
                            </div>
                        ))}
                    </div>
                );
            }
    }
}

const mapStateToProps = (state) => {
        return { posts : state }
}


export default connect(mapStateToProps)(Events);