import { useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  //Scroll to Inventory Functionality
  const inventoryRef = useRef(null);
  const handleInventoryScroll = () => {

    if(location.pathname !== '/'){
      navigate('/')
      
    }

    inventoryRef.current.scrollIntoView()  

  }

  return (
    <div className="App">
    <Navbar inventoryRef={inventoryRef} handleInventoryScroll={handleInventoryScroll} />
   <Routes>
    <Route path="/" element={<Home inventoryRef={inventoryRef} handleInventoryScroll={handleInventoryScroll} />}></Route>
    <Route path="/product/:id" element={<ProductPage/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
