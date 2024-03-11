import './App.css'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

// pages
import ProjectDescription from './pages/ProjectDescription'
import DreamLog from './pages/DreamLog'
import Representation from './pages/Representation'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Representation />} />
          <Route path="/second-iteration" element={<DreamLog />} />
          <Route path="/project-description" element={<ProjectDescription />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
