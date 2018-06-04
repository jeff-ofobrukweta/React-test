import React, { Component } from 'react';
import axios from '../axiosinstance';
import Material from '../Materialcard2/Material';
import Navigationbar from '../Navigationbar/Navigationbar';


class Materialcard extends Component {

  constructor(props) {
    super(props);
    this.state = {list:[]};
  }


  componentDidMount(){
    axios.get('/listFiles')
    .then((data)=> {
      this.setState({list:data.data})
      console.log(">>>material loading"+JSON.stringify(data.data,null,2));
    })
    .catch((error) =>{
      console.log(error);
    });
  }


  
  handleSplice=(e)=>{
    
  }
  
  
  render() {
    return (
      <div>
        <Navigationbar/>
        <br/>
        <br/>
        {
          this.state.list.map((value,index)=>{
            console.log(value.bucket.name)
            return <Material name={value.name} key={index} bucketname={value.bucket.name}/>
          })
        }
      </div>
        );
  }
}

export default Materialcard;