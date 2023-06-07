import React,{Component} from "react";
import './chatInput.scss';

class chatInput extends Component{
    render(){
        return(
            <div className="chatInput">
                <input onKeyDown={this.props.send} placeholder="Type a message ...  Hit enter to send"/>
            </div>
        )
    }
}

export default chatInput;