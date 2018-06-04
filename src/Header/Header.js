import React, { Component } from 'react';
import './Header.css';
import axios from '../axiosinstance';
import Navigationbar from '../Navigationbar/Navigationbar';
import Flashmessage from '../Flashmessage/Flashmessage';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    firstname: '',
    lastname:'',
    phoneNumber:'',
    email:'',
    password:'',
    massage:"",
    error:''
  };

    this.handleChangefirstname = this.handleChangefirstname.bind(this);
    this.handleChangelastname = this.handleChangelastname.bind(this);
    this.handleChangephoneNumber = this.handleChangephoneNumber.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangefirstname(event) {
    this.setState({firstname: event.target.value});
  }

  handleChangelastname(event) {
    this.setState({lastname: event.target.value});
  }
  handleChangephoneNumber(event) {
    this.setState({phoneNumber: event.target.value});
  }

  handleChangeemail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    axios({
      method: 'post',
      url: '/signup',
      data: {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        password:this.state.password
      }
    })
    .then((response)=> {
       this.setState({message:response.data.message});
        console.log(">>>>>>>>>>>>//////"+JSON.stringify(response,null,2));
    })
    .catch((error)=>{
      this.setState({error:error});
      console.log(error);
    });
  }

  render() {
    const {firstname,lastname,phoneNumber,email,password, message,error} = this.state;
    return(
      <div >
        <Navigationbar/>
        <form onSubmit={this.handleSubmit} className="handleSubmit">
        <ul className="form">
           <Flashmessage>{message+" "+error}</Flashmessage>
          <li><input type="text" placeholder="  firstname" value={firstname} onChange={this.handleChangefirstname}/></li>
          <li><input type="text" placeholder="  lastname" value={lastname} onChange={this.handleChangelastname}/></li>
          <li><input type="text" placeholder="  phoneNumber" value={phoneNumber} onChange={this.handleChangephoneNumber}/></li>
          <li><input type="email" placeholder="  email ie@bezop.com" value={email} onChange={this.handleChangeemail}/></li>
          <li><input type="password" placeholder="  password" value = {password} onChange={this.handleChangePassword}/></li>
          <li><input type="submit" className="signup_btn" value="Submit"/></li>
        </ul>
        </form>
      </div>
      );
  }
}

  
export default NameForm;  
  