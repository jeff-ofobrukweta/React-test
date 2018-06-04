import React, { Component } from 'react';
import './Formlogin.css';
import axios from '../axiosinstance';
import Navigationbar from '../Navigationbar/Navigationbar';
import Flashmessage from '../Flashmessage/Flashmessage';
import {BrowserRouter as Router,NavLink,Redirect,withRouter,Route} from 'react-router-dom';
import Dragpage from '../Dragpage/Dragpage';


class Formlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    email:'',
    password:'',
    massage:"",
    error:false,
    isLoggedIn:false
  };

    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmitlogin = this.handleSubmitlogin.bind(this);
  }

  handleChangeemail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  async handleSubmitlogin(event){
    event.preventDefault();
    axios({
      method: 'post',
      url: '/login',
      data: {
        email:this.state.email,
        password:this.state.password
      }
    })
    .then((response)=> {
      this.props.history.push('/landing');
          this.setState({message:response.data.message});
          if(response.data.message=="Logged In Successfully"){
            this.setState({isLoggedIn:true})
            window.setTimeout(()=>{
              console.log('this is the immage');
            },2000);
         }else{
          this.setState({isLoggedIn:false});
         }
       

    })
    .catch((error)=>{
      this.setState({error:true});
      console.log(error);
    });
  }

  render() {
    const {email,password, message,isLoggedIn} = this.state;
    const confirmatiom = isLoggedIn;
    let flash = null;

    const flah = (message)?  <Flashmessage>{message}</Flashmessage>:null
    
    
    const logInform = (
      <div>
      <Navigationbar/>
        <form onSubmit={this.handleSubmitlogin}>
        <ul className="form">
          {flah}
          <li><input type="email" placeholder="  email ie@bezop.com" value={email} onChange={this.handleChangeemail}/></li>
          <li><input type="password" placeholder="  password" value = {password} onChange={this.handleChangePassword}/></li>
          <li><input type="submit" className="signup_btn" value="Submit"/></li>
        </ul>
        </form>
        </div>
    );
    return(
      <div >
        {logInform}
      </div>
      );
  }
}

  
export default withRouter(Formlogin);  