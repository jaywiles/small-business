import { connect } from 'react-redux'
import Login from '../components/Login'
import { withRouter } from "react-router-dom";
import { login } from '../redux/actions'

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//       addListing: (listing) => dispatch(addListing(listing))
//   }
// }

export default withRouter(connect(mapStateToProps, {login})(Login));