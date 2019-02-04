import { connect } from 'react-redux'
import * as actions from '../actions';
import Post from '../components/Post';

const mapStateToProps = (state) => {
    return {
        events : state.events,
        editing : state.editing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent : event => dispatch(actions.deleteEvent(event)),
        editEvent : (id, event) => dispatch(actions.editEvent(id, event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);