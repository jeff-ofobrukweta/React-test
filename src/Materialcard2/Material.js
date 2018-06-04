import React,{Component} from 'react';
import axios from '../axiosinstance';
import './Material.css';

    class Material extends Component {
      constructor(props) {
        super(props);
        this.state = {
         
        };
      }

      handleDelete=(e)=>{
          e.preventDefault();
          console.log(this.props.bucketname+">>>>>>filename>>"+this.props.name)
          axios.delete('/deletefile', {
            bucketName:this.props.bucketname,
            filename: this.props.name
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      render() {
        return (
          <div>
          <a id="case-title" href=" ">
      </a>
      <div className="card">
          <a href="#.">
              <div className="card-image">
              <img className="mdl-card__title mdl-card--expand" src={`https://storage.cloud.google.com/my-bucketbezop/${this.props.name}?_ga=2.85784985.-1292783811.1527510881&_gac=1.51846491.1527675517.Cj0KCQjwl7nYBRCwARIsAL7O7dF84LDjec7fuHcSglFw4H2XEctnpiuubOjd8dB9RiqVgVT6gC19vT0aAnn3EALw_wcB`} alt="pics" key={this.props.index}/>
              </div>
              <div className="card-body">
                  <div className="card-date">
                      <time>
                          20 Novembre 1992
                      </time>
                  </div>
                  <div className="card-title">
                      <h3>
                          {this.props.name}
                      </h3>
                  </div>
                  <div className="card-exceprt">
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptatibus
                          autem consectetur voluptate facere at, omnis ab optio placeat officiis!
                          Animi modi harum enim quia veniam consectetur unde autem inventore.
                          <br/>
                          <span><input type="submit" onClick={this.handleDelete} value="Delete" className="materialbutton"/></span>
                      </p>
                  </div>
              </div>
          </a>
      </div>
          </div>
        );
      }
    }

    export default Material;