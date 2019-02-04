export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE = 'UPDATE'

export function addEvent(data){
    //console.log(data);
    return { type : ADD_EVENT , 
            data
            }
}

export function update(id,data){
    return { type : UPDATE, id , data }
}

export function editEvent(id){
    return  { type : EDIT_EVENT , id}
}

export function deleteEvent(id){
    return { type : DELETE_EVENT , id}
}