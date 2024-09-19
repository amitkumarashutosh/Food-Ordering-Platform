import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './layouts/Layout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout>home page</Layout>} />
        <Route path='/login' element={<p>login</p>} />
      </Routes>
    </Router>
  )
}

export default App
