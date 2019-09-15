import React, { Component } from "react";
import { connect } from "react-redux";
import {login} from '../Actions/Action';
import api from '../Api/index';
import browserHistory from '../Utils/BrowserHostory';

class Signin extends Component {
  state={
    name:'',
    password:'',
    namem:'',
    passwordm:'',
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  onsignin = async () => {
    debugger
    const user={
        name:this.state.name,
        password:this.state.password
    }
    let t=0;
    let namel=this.state.name.length, passwordl=this.state.password.length;
    let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
    let reg_user=/^[A-Za-z0-9]{2,10}$/;
    
    if(namel===0) this.setState({namem:'Firstname is required'});
    else if(!reg_user.test(this.state.name)) this.setState({namem:'Invalid Firstname'});
    else{
      t++;
      this.setState({namem:''});
    }

    if(passwordl===0) this.setState({passwordm:'Password is required'});
    else if(!reg_pwd.test(this.state.password)) this.setState({passwordm:'Invalid Password'});
    else {
      t++;
      this.setState({passwordm:''});
    }

    if(t>1) {
    await api.signin(user).then(res => {
        console.log(res.data)
        this.props.login(res.data)
        if(res.data=="Login Succesfully")
          browserHistory.push('/dashboard')
      });
    }

  }
  render() {
    return (
      <div>
          <h1 className='heading'>SIGN_IN FORM</h1>
        <div>
          <label>User Name</label>
          <input className='inputbox' type='text' onChange={this.handleChange} name='name'/>
        </div>
        <div className='red'>{this.state.namem}</div>
        <div>
          <label>Password</label>
          <input className='inputbox' type='password' onChange={this.handleChange} name='password'/>
        </div>
        <div className='red'>{this.state.passwordm}</div>
        <button className='btn' onClick={this.onsignin}>SIGN IN</button>
        <div>{this.props.msg}</div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  const msg=state.loginmsg, regmsg=state.regmsg;
  return {
    msg,regmsg
  };
};

export default connect(
  mapStateToProps,
  {login}
)(Signin);
