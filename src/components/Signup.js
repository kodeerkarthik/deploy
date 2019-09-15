import React, { Component } from "react";
import { connect } from "react-redux";
import browserHistory from '../Utils/BrowserHostory';
import {register} from '../Actions/Action';
import api from '../Api/index';
// import { signup } from './backendFunction'

class Signup extends Component {
  state={
    name:'',
    password:'',
    place:'',
    DOB:'',
    namem:'',
    passwordm:'',
    placem:'',
    DOBm:''
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  register = async () => {
    let t=0;
    const user={
      name:this.state.name,
      password:this.state.password,
      place:this.state.place,
      DOB:this.state.DOB
    }
    let namel=this.state.name.length, passwordl=this.state.password.length, placel=this.state.place.length, DOBl=this.state.DOB.length;
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

    if(placel===0) this.setState({placem:'Firstname is required'});
    else if(!reg_user.test(this.state.place)) this.setState({placem:'Invalid Firstname'});
    else{
      t++;
      this.setState({placem:''});
    }
    if(DOBl===0) this.setState({DOBm:'Firstname is required'});
    else{
      t++;
      this.setState({DOBm:''});
    }

    if(t>3) {
    await api.signup(user).then(res => {
        this.props.register(res.data)
        if(res.data=="Register Sucessfully")
          browserHistory.push('/signin')
      });
    }

  }

  render() {
    return (
      <div>
        <h1 className='heading'>REGISTER FORM</h1>
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
        <div>
          <label>Place</label>
          <input className='inputbox' type='text' onChange={this.handleChange} name='place'/>
        </div>
        <div className='red'>{this.state.placem}</div>
        <div>
          <label>Date Of Birth</label>
          <input className='inputbox' type='text' onChange={this.handleChange} name='DOB'/>
        </div>
        <div className='red'>{this.state.DOBm}</div>
        <button className='btn' onClick={this.register}>REGISTER</button>
        <div>{this.props.regmsg}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const regmsg=state.regmsg;
  return {
    regmsg
  };
};

export default connect(
  mapStateToProps,
  {register}
)(Signup);
