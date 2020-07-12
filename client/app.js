import React from 'react'

import {NavBar} from './components/navbar'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Routes />
    </div>
  )
}

export default App
