import React, {Component} from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';
import DatePicker from '../../shared/form/fields/DatePicker';
import Input from '../../shared/form/fields/Input';
import {required, validEmail} from '../../shared/form/validation/validation';

class MemberSignupComponent extends Component {
  render() {
    const {handleSubmit, invalid, pristine} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            name="firstName"
            component={Input}
            type="text"
            label="First Name"
            validate={required}
          />
        </div>
        <div className="form-group">
          <Field
            className="form-control"
            name="lastName"
            component={Input}
            type="text"
            label="Last Name"
            validate={required}
          />
        </div>
        <div className="form-group">
          <Field
            className="form-control"
            name="email"
            component={Input}
            type="email"
            label="Email"
            validate={[required, validEmail]}
          />
        </div>
        <div className="form-group">
          <Field
            className="form-control"
            name="date"
            component={DatePicker}
            label="Date"
            validate={required}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={pristine || invalid}>Submit</button>
      </form>
    )
  }
}

MemberSignupComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MemberSignupComponent;
