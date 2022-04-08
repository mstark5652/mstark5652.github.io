import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App'
import EventContainer from './EventContainer'

// leave - used for including styles in build
import './styles/main'

if (typeof window !== 'undefined') {
  const main = document.getElementById('main')
  if (!main) {
    window.onload = () => {
      ReactDOM.render(<EventContainer />, document.getElementById('root'))
    }
  } else {
    window.onload = () => {
      ReactDOM.render(<AppContainer />, document.getElementById('main'))
    }
  }
}
