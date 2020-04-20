import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogout } from '../../actions';
import { withUserService } from '../hoc-helpers';

class LogoutPage extends Component {
//   static propTypes = {
//     dispatch: PropTypes.func.isRequired
//   };

  componentWillMount() {
    const { userLogout, userService } = this.props;
    //this.props.dispatch(authActionCreators.logout());
    userService.logout();
    userLogout();
  }

  render() {
    return (
      <Redirect to="/login" />
    );
  }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        userLogout:()=> dispatch(userLogout()),
    }
};

export default withUserService(connect(null, mapDispatchToProps)(LogoutPage));