import { useState } from 'react'
import { Link, Route, Routes, NavLink } from 'react-router-dom'
import Support from './components/Support'
import About from './components/About'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Main from './components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">support</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/labs">labs</NavLink>
          </li>

        </ul>
      </nav>

        <Routes>
          //  default rout
          <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/labs" element={<Labs/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
