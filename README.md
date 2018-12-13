# ReactWebView

**Not production ready. Do not use, it's just a simple tester.**

## Todo
Check up on removal of 'X-Frame-Options' or set('X-Frame-Options', 'ALLOW-FROM', 'http://app.react2go.io/')

```js
const URL = `http://localhost:3005/app/5ac18af0-ded4-4a4a-9a1c-6e171b71fcf3`

function App() {
  	return (
		<div className="App">
		<h1>WebView</h1>
		<WebView src={URL} height="500" width="375" />
	</div>
  )
}
```
## Package ID
When creating the Tenant app the user receives an app package ID, and can create a number of parameters (props) that can be used inside the Tenant app.

## Parameters
URL contain a parameter with an app package id to pass to the WebView Tenant app so the Tenant app can use an API to fetch different parameters or data needed. This way the Host app can pass data (props) down to the Tenant app.

Parameters has a type and a default value just like React props.

## WebHooks
As with parameters the user can create a number of WebHooks that can be responsible for fetching external data that needs to be passed to the Tenant app. A WebHook can be a call to an API that returns a JSON structure and data.
