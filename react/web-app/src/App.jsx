import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';


function App() {
  const [count, setCount] = useState(0)
  console.log("App Rendered")
  return (
    <>
    <div>ee</div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
