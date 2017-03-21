import React, { Component } from 'react';
import {Link} from "react-router"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';

import "./style.css"
import * as actions from '../Action'
import store from '../store'

class SignUp extends Component {

    handleSubmit(event){
        event.preventDefault();
        var userName=this.refs.userName.value;
            var password=this.refs.password.value;
            var mobile=this.refs.mobile.value;
            var repass=this.refs.repass.value;
            var email=this.refs.email.value;

            if(userName.length>=1 && userName.length<15){
                //  if(password.length!=0 && password === repass){
                    // if(mobile.length!=0){
                        store.dispatch(actions.signUp(userName,password,mobile,email))
                        this.props.history.push("/")
                    }
                    else alert("mobile should be number")
                }
                // else alert("password & repass should be same")
            // }
            // else alert("enter username")
    // }


    render() {
        return (
            <div>
                 <h1 className="text-center bg-faded">Sign Up</h1>
                <form className="form-group" onSubmit={(event)=>this.handleSubmit(event)}>
                    <label>UserName</label>
                    <input type="text" ref="userName" className="form-control" />
                    <label>Password</label>
                    <input type="password" ref="password" className="form-control" />
                    <label>Re-enter Password</label>
                    <input type="password" ref="repass" className="form-control" />
                    <label>Mobile</label>
                    <input type="number" ref="mobile" className="form-control" />
                    <label>Emain</label>
                    <input type="email" ref="email" className="form-control" />
                    <button className="btn btn-success btn-small pull-right Margin">Submit</button>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        userDetails:state.userDetails
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)