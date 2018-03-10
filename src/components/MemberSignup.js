import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';


class MemberSignupComponent extends Component {
  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <div>
            <Field
              className="form-control"
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <div>
            <Field
              className="form-control"
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <div>
            <Field
              className="form-control"
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Date</label>
          <div>
            <Field
              className="form-control"
              name="date"
              component="input"
              type="text"
              placeholder="Date"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

MemberSignupComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MemberSignupComponent;
