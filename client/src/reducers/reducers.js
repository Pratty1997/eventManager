import * as actions from '../actions';

const INITIAL_STATE = {
    events : [],
    isFetching :false,
    error : null,
    eventToDelete : null,
    eventToEdit : null,
    editing : false
}

export const Reducers = (currentState = INITIAL_STATE, action) => {
    switch(action.type) { 
        case actions.FETCH_EVENTS_REQUEST:
            return {
                ...currentState,
                events : [],
                isFetching : true,
                error : null,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }
        
        case actions.FETCH_EVENTS_SUCCESS:
            return {
                ...currentState,
                events: action.events.events,
                isFetching : false,
                error : null,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.FETCH_EVENTS_FAILURE:
            return {
                ...currentState,
                events : [],
                isFetching : false,
                error : action.error,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.ADD_EVENT_REQUEST:
            return {
                ...currentState,
                events : currentState.events,
                isFetching : true,
                error : null,
                eventToDelete : null,
                
                eventToEdit : null,
                editing : false
            }
        
        case actions.ADD_EVENT_SUCCESS:
            return {
                ...currentState,
                events : currentState.events.concat([action.event]),
                isFetching : false,
                error : null,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.ADD_EVENT_FAILURE:
            return {
                ...currentState,
                events : currentState.events,
                isFetching : false,
                error : action.error,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.EDIT_EVENT_REQUEST:
            return {
                ...currentState,
                events : currentState.events,
                isFetching : true,
                error : null,
                eventToDelete : null,
                eventToEdit : action.event,
                editing : true
            } 
        
        case actions.EDIT_EVENT_SUCCESS:
            const updatedEvents = currentState.events.map((event) => event.id === action.id ? action.edit : event)
            return {
                ...currentState,
                events : updatedEvents,
                isFetching : false,
                error : null,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.EDIT_EVENT_FAILURE:
            return { 
                ...currentState,
                events : currentState.events,
                isFetching : false,
                error : action.error,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        case actions.DELETE_EVENT_REQUEST:
            return {
                ...currentState,
                events : currentState.events,
                isFetching : true,
                error : null,
                eventToDelete : action.id,
                eventToEdit : null,
                editing : false
            }
        
        case actions.DELETE_EVENT_SUCCESS:
            const filteredEvents = currentState.events.filter((event) => event.id !== action.id)
            return {
                ...currentState,
                events : filteredEvents,
                isFetching : false,
                error : null,
                eventToDelete : action.event,
                eventToEdit : null,
                editing : false
            }

        case actions.DELETE_EVENT_FAILURE:
            return {
                ...currentState,
                events : currentState.events,
                isFetching : false,
                error : action.error,
                eventToDelete : null,
                eventToEdit : null,
                editing : false
            }

        default:
            return currentState
    }
}