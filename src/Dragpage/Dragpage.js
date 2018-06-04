import React,{Component} from 'react';
import './Dragpage.css';
import Uploadbutton from '../Uploadbutton/Uploadbutton';
import Flashmessage from '../Flashmessage/Flashmessage';

class Dragpage extends Component {

    render() {
      return (
        <div>
          <Flashmessage/>
          <Uploadbutton/>
        </div>
      );
    }
  }
  
  export default Dragpage;