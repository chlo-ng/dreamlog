import './App.css'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

// pages
import ProjectDescription from './pages/ProjectDescription'
import DreamLog from './pages/DreamLog'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DreamLog />} />
          <Route path="/project-description" index element={<ProjectDescription />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
