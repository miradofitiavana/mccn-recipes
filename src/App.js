import React from 'react'
import Routes from './config/routes'

import './App.css'
import { Provider } from 'react-redux'
import { store } from './config/store'

import './config/translation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )
}

export default App
