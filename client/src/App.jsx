import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Upload from './components/Upload'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='*' element={<Navigate to={"/"} replace />} />
      </Routes>

    </>
  )
}

export default App
