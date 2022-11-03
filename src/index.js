import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App'

// leave - used for including styles in build
import './styles/main'

if (typeof window !== 'undefined') {
  window.onload = () => {
    ReactDOM.render(<AppContainer />, document.getElementById('main'))
  }
}
