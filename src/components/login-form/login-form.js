import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLoginRequest, userLogged, userLoggedError } from '../../actions';
import './login-form.scss';
import ErrorIndicator from '../error-indicator';
import { Route, Redirect } from 'react-router-dom';
import { withUserService } from '../hoc-helpers';

class LoginFormContainer extends Component {
    state = {
        username: '',
        password: '',
    }
    onSubmit = (e)=> {
        const { userService } = this.props;
        const { username, password } = this.state;
        e.preventDefault();
        userService.login({username, password})
            .then((userData) => this.props.userLogged(userData))
            .catch((error) => this.props.userLoggedError(error))

    }
    onLabelChange = (e) =>{
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.name
        this.setState(prev => ({
          ...prev,
          [fieldName]: value,
        }))
    }
    render() {
        const { authorized, error } = this.props;
        const { username, password } = this.state;
        const errorMsg = error ? <p> Username or password are incorrect</p> : null;
        if (!authorized) {
            return (
                <form className="login-form d-flex flex-column"
                onSubmit={this.onSubmit}>
                <div className="login-error">{errorMsg}</div>
                <div className="form-label-group">
                    <label htmlFor="username"><i className="icon-user"></i>Username</label>
                    <input
                        id="username"
                        className="form-control"
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={username}
                        autoComplete="off"
                        onChange={this.onLabelChange}>
                    </input>
                </div>
                <div className="form-label-group">
                    <label htmlFor="password"><i className="icon-key"></i>Password</label>
                    <input
                        id="password"
                        className="form-control"
                        type="text"
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        autoComplete="off"
                        onChange={this.onLabelChange}>
                    </input>
                </div>
    
                <button
                    type="submit"
                    className="btn btn-primary btn-login">
                    Login
                </button>
            </form> 
            )
        }

        return <Redirect to="/profile" />

    }
}

const mapStateToProps = ({ userAuthentication: { authorized, error, user } }) => {
    return {
        authorized,
        error,
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogged: () => dispatch(userLogged()),
        userLoggedError: (error) => dispatch(userLoggedError(error)),
    }
}

export default withUserService(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));