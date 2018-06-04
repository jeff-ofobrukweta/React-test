import React, { Component } from 'react';
import {Route,Switch,Link,History} from 'react-router-dom';
import './Uploadbutton.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import axios, { post } from 'axios';

    class Uploadbutton extends Component {
      constructor() {
        super();
        this.state = {
          uploadFile: '',
          localfileDirectory:''
        };
      }

      onChange = (e) => {
        const state = this.state;

        switch (e.target.name) {
          case 'uploadFile':
            state.uploadFile = e.target.files[0];
            break;
          default:
            state[e.target.name] = e.target.value;
        }

        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { uploadFile } = this.state;

        let formData = new FormData();

        formData.append('uploadFile', uploadFile);

        axios.post('http://localhost:1337/uploadFiletocloud', formData)
          .then((result) => {
            this.setState({localfileDirectory:result.data.file[0].fd})
            console.log(">>>>>>>>>"+JSON.stringify(this.state.localfileDirectory,null,2));
          });
      }
      componentDidUpdate(){
        console.log("_____>>>>>"+this.props)
      }

      render() {
        const { uploadFile,localfileDirectory } = this.state;
        return (
          <div>
          <Navigationbar/>
          <form className="form-upload" onSubmit={this.onSubmit}>
            <input
              type="file"
              name="uploadFile"
              onChange={this.onChange}
            />
            <button className="upload-button" type="submit">Upload file</button>
            <legend>
            <span>
                <img src={`file://${localfileDirectory}`} alt="img"/>
            </span>
            </legend>
          </form>
          </div>
        );
      }
    }

export default Uploadbutton;
