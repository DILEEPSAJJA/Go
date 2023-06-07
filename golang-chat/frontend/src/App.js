import React,{components} from 'react';
import Header from './components/Header/Header';
import chatHistory from './components/chatHistory/chatHistory';
import chatInput from './components/chatInput/chatInput';
import '/App.css';
import {connect, sendMsg} from './api';

class App extends component {
    constructor(props){
        super(props);
        this.state = {
            chatHistory : []
        }
    }

    componentDidMount(){
        connect((msg => {
            console.log("New Message")
            this.setState(prevState => ({
                chatHistory : [...prevState.chatHistory, msg]
            }))
            console.log(this.state);
        }));
    }

    render(){
        return(
            <div className="App">
                <Header/>
                <chatHistory chatHistory={this.state.chatHistory} />
                <chatInput send={this.send}/>
            </div>
        );
    }
}

export default App;
