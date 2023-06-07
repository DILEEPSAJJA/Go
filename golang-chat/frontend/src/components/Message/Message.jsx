import React,{Component} from "react";
import './Message.scss'

class Message extends Component{
    constructor(props){
        super(props);
        let temp = JSON.parse(this.props.Message);
        this.state = {
            Message : temp
        }
    }

    render(){
        return(
            <div className='Message'>
                {this.state.Message.body}
            </div>
        );
    };
}

export default Message;