var socket = new WebSocket('ws://localhost:5000/ws');

let connect = (cb)  => {
    console.log("connecting....")

    socket.onopen = () => {
        console.log("sucessfully connected ....")
    }

    socket.onmessage = (msg) => {
        console.log("Message from webSocket : ", msg);
    }

    socket.onclose = (event) => {
        console.log("socket closed connection: " , event)
    }

    socket.onerror = (error) => {
        console.log("socket error : ", error)
    }

};

let sendMsg = (msg) => {
    console.log("Sending msg : ", msg);
    socket.send(msg);
}

export { connect, sendMsg };
