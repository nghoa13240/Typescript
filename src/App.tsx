import './App.css'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import About from './pages/About'
import ProductAdd from './pages/admin/ProductAdd'
import Banner from './components/Banner'
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/add' element={<ProductAdd />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
