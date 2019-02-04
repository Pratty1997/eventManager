import { connect } from 'react-redux';
import * as actions from '../actions';
import Event from '../components/Event';

const mapStateToProps = (state) => {
    //console.log("Events");
    //console.log(state);
    return {
        events : state.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents : () => dispatch(actions.fetchEvents()),
        addNewEvent : event => dispatch(actions.addEvent(event))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Event);