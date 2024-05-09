import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'
import Appointmnet from './Components/Appointment/Appointment'
import Review from './Components/Review/ReviewPage'
import TrackOrder from './Components/TrackOrder/TrackOrder'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/eyeTest' element={<Appointmnet />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/review' element={<Review/>}/>
          <Route path='/track' element={<TrackOrder/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
