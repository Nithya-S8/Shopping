import React, { Component } from 'react';
import {Link} from 'react-router'

import {connect} from "react-redux"
import { bindActionCreators } from 'redux';

import * as actions from '../Action'
import store from '../store'

import "./style.css"

class Login extends Component {
    handleClick(event){
        event.preventDefault();
        let userName=this.refs.userName.value;
        let password=this.refs.password.value;
        let id=null;
        let userDetail=null;
        for(let user of this.props.userDetails){
            if(userName === user.userName){
                id=user.id
            }
        }

        userDetail=this.props.userDetails.filter((user)=>{if(user.id === id) return user})
      
         if(userDetail.length!=0){
        if(userName === userDetail[0].userName){
            if(password===userDetail[0].password)
            {
                this.props.history.push(`/home/${userDetail[0].userName}`)
            }
            else console.log("wrong pass")
        }
        else console.log("wrong user id")
         }
    }


  

    render() {
        return (
            <div>
                <form className="form-group">
                    <label>User Id:</label>
                    <input className="form-control" ref="userName" type="text" />
                    <label>Password</label>
                    <input className="form-control" ref="password" type="password" />
                    <p href="#" className="pull-right Margin"><Link to="/signup">New user Register here</Link></p>
                    <button className="btn btn-primary btn-small pull-right Margin" onClick={(event)=>{this.handleClick(event)}}>Login</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(Login)