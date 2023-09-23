import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './components/daisynav/DaisyNav';
import MyNav from './components/mynav/MyNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DaisyNav />
      <MyNav/>
    </>
  )
}

export default App
