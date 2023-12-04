import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {store} from './App/store'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
