import { connect } from 'react-redux';
import * as actions from '../actions';
import Events from '../components/Events';

const mapStateToProps = (state) => {
    return {
        isFetching : state.isFetching,
        events : state.events,
        eventToEdit : state.eventToEdit,
        eventToDelete : state.eventToDelete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents : () => dispatch(actions.fetchEvents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Events);