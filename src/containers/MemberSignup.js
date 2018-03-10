import { reduxForm } from 'redux-form';
import MemberSignupComponent from '../components/MemberSignup';
import {memberSignup} from '../redux/actions/memberSignupAction';

const MemberSignup = reduxForm(
  {
    form: 'member',
    onSubmit: (data, dispatch) => dispatch(memberSignup(data))
  }
)(MemberSignupComponent);


export default MemberSignup;
