import './App.css'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import About from './pages/About'
import ProductAdd from './pages/admin/ProductAdd'
import { TProduct } from './interfaces/TProduct'
import { createProduct, getProducts, deleteProduct } from './apis/product'
import ProductEdit from './pages/admin/ProductEdit'
import ProductDelete from './pages/admin/ProductDelete'
import Banner from './components/Banner'
import instance from './apis'
function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  console.log(products)

  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProduct(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      navigate('/admin')
    })()
  }

  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const { data } = await instance.put(`/products/${product.id}`, product)
      setProducts(products.map((item) => (item.id === data.id ? data : item)))
      navigate('/admin')
    })()
  }

  const handleDelete = async (productId: number) => {
    try {
      await deleteProduct(productId)
      setProducts(products.filter((product) => product.id !== productId))
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }
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
        <Route path='/admin/*' element={<Dashboard onDelete={handleDelete} />} />
        <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
        <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
