import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import './index.css'
import App from './App'
import Teste from './pages'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/teste" component={Teste} />
        </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
