import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function WebView(props) {
	return (
		<div className="WebView">
			<iframe 
				src={props.src} 
				height={props.height} 
				width={props.width} 
				scrolling={props.scroll} 
				frameBorder='0' 
				marginHeight='0'
				marginWidth='0'
				padding='0'
			/>
		</div>
	)
}

const URL = `http://localhost:3005/event/1`

function App() {
  return (
	<div className="App">
      <h1>WebView</h1>
	  <WebView src="https://console.senti.cloud/login" height="500" width="375" />
	  <WebView src="https://console.senti.cloud/login" height="500" width="375" scroll="no" />
	  <WebView src={URL} height="500" width="375" />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

// https://www.lifewire.com/iframes-and-css-3468669