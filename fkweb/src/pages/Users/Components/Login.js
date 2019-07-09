import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom'

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: localStorage["fkUserState"] && JSON.parse(localStorage["fkUserState"]).user.auth_token
                        ? true: false,
            user: {},
            loginError:false
        }

        this.loginFormSubmit = this.loginFormSubmit.bind(this);
        this.emailField = React.createRef();
        this.passwordField = React.createRef();
    }

    componentDidMount(){
        
        // let appState2 = {
        //     isLoggedIn: false,
        //     user: {
        //         auth_token: 'asbjd23571$#%W#!VHWU!^'
        //     }
        //   };
        // localStorage["userState"] = JSON.stringify(appState2)
        // let token = JSON.parse(localStorage["userState"]).user.auth_token
        // if(token){
        //     this.setState()
        // }
       
    }

    loginFormSubmit(event){
        event.preventDefault();

        let params = {
            email: this.emailField.current.input.value,
            password: this.passwordField.current.input.value
        }

        console.log(params);

        return;
        
    }

    render(){
        if(this.state.isLoggedIn){
            return(
                <Redirect to='/profile' />
            )
        }
        return(
            <div id="fk-Login">
                <div className="container py-6">
                    <div className="row min-vh-100">
                        <div className="col-md-8 col-lg-6 col-xl-6 d-flex align-items-center">
                        <div className="w-100 py-10 px-md-5 px-xl-6 position-relative">
                            <div className="mb-5">
                                <h2>Welcome back</h2>
                            </div>
                            <form className="form-validate" onSubmit={this.loginFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="loginUsername" className="form-label"> Email Address</label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    required
                                    data-msg="Please enter your email"
                                    className="form-control"
                                    name="emailField"
                                    ref={this.emailField}
                                />
                            </div>
                            <div className="form-group mb-4">
                                <div className="row">
                                <div className="col">
                                    <label htmlFor="loginPassword" className="form-label"> Password</label>
                                </div>
                                </div>
                                <input 
                                    type="password"
                                    required
                                    data-msg="Please enter your password"
                                    className="form-control"
                                    name="passwordField"
                                    ref={this.passwordField}
                                />
                            </div>
                            <button className="btn btn-lg btn-block btn-primary">Sign in</button>
                            <hr className="my-3 hr-text letter-spacing-2" />
                            <p className="text-center"><small className="text-muted text-center">Don't have an account yet? <Link to="/register">Register Now</Link></small></p>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Login