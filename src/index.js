import React from "react"
import ReactDOM from "react-dom"
import Markdown from './markdown'

import "./styles.css"

function WebView(props) {
	return (
		<div className="WebView">
			<iframe 
				title='WebView'
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
// const URL = 'http://localhost:3005/events/add?date=2018-04-21&name=Viola%20Ingeman%20Broberg&birthday=1&content=This%20is%20so%20much%20fun%20to%20work%20with%20the%20MySQL/Express/React%20stack'

function App() {
  return (
	<div className="App">
      <h1>WebView</h1>
	  <WebView src="https://console.senti.cloud/login" height="500" width="375" />
	  <WebView src="https://console.senti.cloud/login" height="500" width="375" scroll="no" />
	  <WebView src={URL} height="500" width="375" />
	  <Markdown />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

// https://www.lifewire.com/iframes-and-css-3468669

