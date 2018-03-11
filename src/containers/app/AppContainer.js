import {connect} from 'react-redux';
import AppComponent from '../../components/app/AppComponent';

export default connect(
  state => ({ notifications: state.notifications })
)(AppComponent);
