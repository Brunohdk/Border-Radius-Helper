import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
        </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
