package main

import(
	"fmt"
	"net/http"
	"github.com/DILEEPSAJJA/go/golang_chat"

)

func serveWS(pool *websocket.pool,w http.ResponseWriter,r *http.request){
	fmt.Println("Websocket endpoint reached")

	conn,err := wevsocket.Upgrade(w, r)

	if err != nil{
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes(){
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter,r *http.request){
		serveWS(pool,w,r)
	})
}

func main() {
	fmt.Println("Dileep's Chat project with golang and React-Js")
	setupRoutes()
	http.ListenAndServe(":5000",nil)
}