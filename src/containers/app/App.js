import {connect} from 'react-redux';
import App from '../../components/app/App';

export default connect(
  state => ({ notifications: state.notifications })
)(App);
