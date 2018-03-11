import {reset, reduxForm } from 'redux-form';
import MemberSignupComponent from '../../components/member/MemberSignupComponent';
import {memberSignup} from '../../redux/actions/memberSignupAction';
import { success } from 'react-notification-system-redux';

const MemberSignupContainer = reduxForm(
  {
    form: 'member',
    onSubmit: (data, dispatch) => dispatch(memberSignup(data)),
    onSubmitSuccess: (result, dispatch) => {
      dispatch(reset('member'));
      dispatch(success({
        title: 'See you on event!',
        message: 'Thank you for signing up on our event.'
      }))
    }
}
)(MemberSignupComponent);

export default MemberSignupContainer;
