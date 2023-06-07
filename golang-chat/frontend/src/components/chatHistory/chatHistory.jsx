import React,{Component} from "react";
import './chatHistory.scss';
import Message from '../Message/Message'

class chatHistory extends Component{
    render(){
        console.log(this.props.chatHistory);
        this.props.chatHistory.map(msg => <Message key={msg.timeStamp } message={msg.data}/>);

        return(
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {messages}
            </div>
        )
    }
}