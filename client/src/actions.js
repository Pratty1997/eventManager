import axios from 'axios';
const url = "http://localhost:3001/api";
const fetchUrl = "/getEvents";
const addUrl = "/addEvent";
const deleteUrl = "/deleteEvent";
const editUrl = "/editEvent";

// Add event actions
export const ADD_EVENT_SUCCESS = "ADD_EVENT_SUCCESS";
export const ADD_EVENT_FAILURE = "ADD_EVENT_FAILURE";
export const ADD_EVENT_REQUEST = "ADD_EVENT_REQUEST";

// Delete event actions
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";
export const DELETE_EVENT_REQUEST = "DELETE_EVENT_REQUEST";

// Fetch event actions
export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE";
export const FETCH_EVENTS_REQUEST = "FETCH_EVENTS_REQUEST";

// Edit event actions
export const EDIT_EVENT_SUCCESS = "EDIT_EVENT_SUCCESS";
export const EDIT_EVENT_FAILURE = "EDIT_EVENT_FAILURE";
export const EDIT_EVENT_REQUEST = "EDIT_EVENT_REQUEST";



// Add event actions
export const addEvent = (event) => {
    console.log(event);
    return (dispatch) => {
        dispatch(addEventRequest(event));
        return axios.post(url + addUrl , {
            _id : event._id,
            desc : event.desc,
            date : event.date,
            time : event.time,
            followers : event.followers
        }).then(res => {
            if(res.status === 200){
                console.log(res.data);
                dispatch(addEventSuccess(res.data.event));
                return { event : res.data.event }
            }
        });   
    }
}


export function fetchEvents() {
    return (dispatch)=>{
        dispatch(fetchEventsRequest());
        return axios.get(url+fetchUrl).then(res => {
            if(res.status === 200){
                dispatch(fetchEventsSuccess(res.data.events));
                return { events : res.data.events };
            }
            else{
                dispatch(fetchEventsFailure("error Message"));
                return {error : "error"};
            }
        })
        
    }
}


export const editEvent = (id, event) => {
    return (dispatch) => {
        dispatch(editEventRequest(id, event));
        return axios.post(url + editUrl, {
                id : id,
                desc : event.desc,
                date : event.date,
                time : event.time,
                followers : event.followers
        }).then(res => {
            if(res.status === 200){
                dispatch(editEventSuccess(id, event));
                return {
                    success : true,
                    id,
                    event
                }
            }
            else{
                return {
                    succes : false
                }
            }
        })
    }
}


// Delete event actions
export const deleteEvent = (id) => {
    return (dispatch) => {
        dispatch(deleteEventRequest(id));
        return axios.delete(url + deleteUrl, { data : { id : id }} ).then(res => {
            console.log(res);
            if(res.status === 200){
                dispatch(deleteEventSuccess(id));
                return { success: res.success,
                        id
                        };
            }
            else{
                dispatch(deleteEventFailure(id));
                return { error : res.error }
            }
        })
    }
}



export function addEventSuccess(event){
    return {
        type : ADD_EVENT_SUCCESS,
        event
    }
}

export const addEventFailure = (err) => {
    return {
        type : ADD_EVENT_FAILURE,
        err
    }
}

export const addEventRequest = (event) => {
    return {
        type : ADD_EVENT_REQUEST,
        event
    }
}



export function deleteEventSuccess(id){
    return {
        type : DELETE_EVENT_SUCCESS,
        id
    }
}

export function deleteEventFailure(id,err){
    return { 
        type : DELETE_EVENT_FAILURE,
        id,
        err
    }
}

export function deleteEventRequest(id){
    return {
        type : DELETE_EVENT_REQUEST,
        id
    }
}



export function fetchEventsSuccess(events){
    return {
        type : FETCH_EVENTS_SUCCESS,
        events
    }
}

export function fetchEventsFailure(err){
    return {
        type : FETCH_EVENTS_FAILURE,
        err
    }
}

export function fetchEventsRequest(){
    return {
        type : FETCH_EVENTS_REQUEST,
    }
}



export function editEventSuccess(id, edit){
    return {
        type : EDIT_EVENT_SUCCESS,
        id,
        edit
    }
}

export function editEventFailure(id,err){
    return {
        type : EDIT_EVENT_FAILURE,
        id,
        err
    }
}

export function editEventRequest(id){
    return {
        type : EDIT_EVENT_REQUEST,
        id
    }
}