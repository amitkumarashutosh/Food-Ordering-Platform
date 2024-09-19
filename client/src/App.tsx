import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/login' element={<p>login</p>} />
      </Routes>
    </Router>
  )
}

export default App
