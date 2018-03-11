import React, {Component} from 'react';
import './App.css';
import MemberSignup from '../../containers/member/MemberSignup';
import Notifications from 'react-notification-system-redux';

class App extends Component {
  render() {
    const {notifications} = this.props;
    return (
      <div>
        <Notifications
          notifications={notifications}
        />
        <div className="container">
          <h2 className="title">Signup on our event</h2>
          <MemberSignup/>
        </div>
      </div>
    );
  }
}

export default App;
