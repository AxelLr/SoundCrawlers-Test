import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'src/styles/common.scss'
import App from './router/Router'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
