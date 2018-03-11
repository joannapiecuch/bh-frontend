import React, {Component} from 'react';
import './App.css';
import MemberSignupContainer from '../../containers/member/MemberSignupContainer';
import Notifications from 'react-notification-system-redux';

class AppComponent extends Component {
  render() {
    const {notifications} = this.props;
    return (
      <div>
        <Notifications
          notifications={notifications}
        />
        <div className="container">
          <h2 className="title">Signup on our event</h2>
          <MemberSignupContainer/>
        </div>
      </div>
    );
  }
}

export default AppComponent;
