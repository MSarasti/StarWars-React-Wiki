import { useState } from 'react'
import './App.css'
import routes from './config/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {routes}
    </div>
  )
}

export default App
