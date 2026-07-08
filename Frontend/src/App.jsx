import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/create-post" replace />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/about" element={<div className="min-h-screen flex items-center justify-center text-white">About Page</div>} />
        <Route path="*" element={<Navigate to="/create-post" replace />} />
      </Routes>
    </Router>
  )
}

export default App
