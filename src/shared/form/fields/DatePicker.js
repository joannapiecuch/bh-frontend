import React from 'react';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    const initValue = props.input.value;

    this.state = {
      date: initValue ? moment(initValue) : null
    };
  }

  handleChange = (date) => {
    const newValue = date ? moment(date).format('YYYY-MM-DD') : null;

    this.props.input.onChange(newValue);

    this.setState({date});
  };

  render() {
    const {
      input,
      label,
      meta: {
        touched,
        error,
        warning
      },
    } = this.props;

    return (
      <div>
        <label>{label}</label>
        <ReactDatePicker
          {...input}
          className="form-control"
          dateFormat="YYYY-MM-DD"
          placeholderText={label}
          selected={this.state.date}
          onChange={this.handleChange}
        />
        {touched && ((error && <span className="error-message">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )
  }
}

export default DatePicker;
