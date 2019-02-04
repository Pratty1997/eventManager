import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        props : state
    }
}

export default connect (mapStateToProps)(App);