import { useSelector } from 'react-redux'
import Conuter from './components/Conuter'

const App = () => {
  const state = useSelector(state => state.count)
  console.log(state)

  return (
    <div className='container'>
      <h1>Count: {state}</h1>
      <Conuter />
    </div>
  )
}

export default App