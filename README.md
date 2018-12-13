# ReactWebView

**Not production ready. Do not use, it's just a simple tester.**

## Todo
- https://github.com/helmetjs/frameguard

```js
const URL = `http://localhost:3005/applet/5ac18af0-ded4-4a4a-9a1c-6e171b71fcf3`

function App() {
  	return (
		<div className="App">
		<h1>Applet</h1>
		<WebView src={URL} height="500" width="375" />
	</div>
  )
}
```
## Applet Package ID
When creating the Tenant Applet the user receives an Applet package ID, and can create a number of parameters (props) that can be used inside the Tenant Applet.

## Parameters
URL contains a parameter with a package id to pass to the Applet so the Applet can use an API to fetch different parameters or data needed. This way the Host app can pass data (props) down to the Applet.

Parameters has a type and a default value just like React props.

## WebHooks
As with parameters the user can create a number of WebHooks that can be responsible for fetching external data that needs to be passed to the Applet. A WebHook can be a call to an API that returns a JSON structure and data.

```js
const frameguard = require('frameguard')
// Allow from a specific host:
app.use(frameguard({
  action: 'allow-from',
  domain: 'https://applets.react2go.io/'
}))
```
