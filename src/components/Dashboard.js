import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import {oneuser} from '../Actions/Action';
import api from '../Api/index';
import browserHistory from '../Utils/BrowserHostory';

class Dashboard extends Component {
  state={
    users:[],
    user_detail:[],
    name:'',
    password:'',
    place:'',
    DOB:''
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  update=async(id)=>{
    debugger;
    const user={
      name:this.state.name,
      password:this.state.password,
      place:this.state.place,
      DOB:this.state.DOB
    }
    await api.updt(user,id).then(res => {
      console.log("hello")
    });
  }
  
  details=(id)=>{
    api.getDetail(id).then(res => {
      this.props.oneuser(res.data);
      console.log(res.data.name)
      this.setState({user_detail: res.data});
      console.log(this.state.user_detail)
    })
  }

  componentDidMount(){
    axios.get('http://localhost:9000/signup')
    .then(res => {
        this.setState({users: res.data});
    });
  } 

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
          <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4'>
            <h1 className="heading"> List of users</h1>
            {this.state.users.map(user => <div className='dashboard'>
            {user.name}
            <button className="getdetails" onClick={(e)=> this.details(user._id)}>Get Details</button>
            </div>)}
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 '>
            <h1 className='heading'>User Details</h1>
            <div className='row det'>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                <label className='right'>User Name:</label><br/>
                <label className='right'>Password:</label><br/>
                <label className='right'>Place:</label><br/>
                <label className='right'>Date Of Birth:</label><br/>
              </div>
              <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 det'>
                {this.state.user_detail.map(det=><div>
                  <label className='left'>{det.name}</label><br/>
                  <label className='left'>{det.password}</label><br/>
                  <label className='left'>{det.place}</label><br/>
                  <label className='left'>{det.DOB}</label><br/>
                </div>)}
              </div>
              <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
            </div>
            <div>
              <h3>{this.state.user_detail.map(det=>
              <p>
                <label>USER NAME:</label> 
                <input className='inputbox' name='name' onChange={this.handleChange} type='text' placeholder={det.name}/><br/>
                <label>PASSWORD:</label> 
                <input className='inputbox' name='password' onChange={this.handleChange} type='text' placeholder={det.password}/><br/>
                <label>PLACE:</label> 
                <input className='inputbox' name='place' onChange={this.handleChange} type='text' placeholder={det.place}/><br/>
                <label>DATE OF BIRTH:</label>
                <input className='inputbox' name='DOB' onChange={this.handleChange} type='text' placeholder={det.DOB}/><br/>
                <button className="btn" onClick={(e)=> this.update(det._id)}>Update</button>
              </p>)}</h3>
            </div>
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'></div>
        </div>            
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    detail:state.user
  };
};
export default connect(mapStateToProps,{oneuser})( Dashboard);
