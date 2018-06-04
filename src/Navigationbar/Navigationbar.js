import React from 'react';
import './Navigationbar.css';
import {NavLink} from 'react-router-dom';

class Navigationbar extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      return (
        <div>
          <header>
            <nav className="Navigationbar">
                <ol>
                    <li><NavLink activeClassName="my-active" to="/" exact><span id="logoicon" className="glyphicon glyphicon-cloud">cloud cloux.</span></NavLink></li>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/landing">Sync files</NavLink></li>
                    <li><NavLink to="/"><span className="glyphicon glyphicon-trash"></span>Recycle bin</NavLink></li>
                    <li><NavLink to="/upload">Upload</NavLink></li>
                    <li><NavLink to={{
                      pathname:'/all files',
                      hash:'#submit',
                      search:'?quick-submit=true'
                    }}><button className="logout"><span className="glyphicon glyphicon-cloud"></span>Exploremore</button></NavLink></li>
                </ol>
            </nav>
          </header>
        </div>
      );
    }
  }
export default Navigationbar;