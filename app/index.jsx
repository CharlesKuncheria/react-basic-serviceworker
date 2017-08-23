import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App msg={['hello', 'world']}/>, document.getElementById('app'));
