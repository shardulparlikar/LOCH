import { useState } from 'react'
import Information from './components/Information'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Information></Information>
    </>
  )
}

export default App
