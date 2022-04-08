import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App'
import EventContainer from './EventContainer'

// leave - used for including styles in build
import './styles/main'

if (typeof window !== 'undefined') {
  if (document.title === 'Crema Event') {
    window.onload = () => {
      ReactDOM.render(<EventContainer />, document.getElementById('main'))
    }
  } else {
    window.onload = () => {
      ReactDOM.render(<AppContainer />, document.getElementById('main'))
    }
  }
}
