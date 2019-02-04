import axios from 'axios'
const reducers = (state = [] , action )=>{
    //fetch('/api/getEvents').then(data => data.json).then(res => this.setState(res.data.length?{state : res.data}:[]));
    switch(action.type){
        case 'ADD_EVENT':
            return state.concat([action.data]);
        case 'DELETE_EVENT':
        // Filter creates a new array with all the elements that pass the test implemented by the provided function
            return state.filter((post) => post.id!==action.id)
        case 'EDIT_EVENT':
        // Try changing the editing parameter to false
            return state.map((post)=> post.id===action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id===action.id){
                    return {
                        ...post,
                        desc: action.data.desc,
                        date : action.data.date,
                        time : action.data.time,
                        followers : action.data.followers,
                        editing : !post.editing
                    }
                }
                else{
                   
                    return post;
                }
            })

        default:
            axios.get('http://localhost:3001/api/getEvents').then(res=>console.log(res));
            return(state)
    }
}

export default reducers;