import { useRef } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddFurniture from './components/AddFurniture/AddFurniture';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoginPage from './components/LoginPage/LoginPage';
import Manage from './components/ManagePage/Manage';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import 'react-toastify/dist/ReactToastify.css';
import MyInventory from './components/MyInventory/MyInventory';
import ErrorPage from './components/ErrorPage/ErrorPage';

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
    <Route path="/product/:id" element={<RequiredAuth><ProductPage/></RequiredAuth>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/register" element={<RegisterPage/>}></Route>
    <Route path="/manage" element={<RequiredAuth><Manage/></RequiredAuth>}></Route>
    <Route path="/myinventory" element={<RequiredAuth><MyInventory/></RequiredAuth>}></Route>
    <Route path="/addfurniture" element={<RequiredAuth><AddFurniture/></RequiredAuth>}></Route>
    <Route path="*" element={<ErrorPage/>}></Route>

   </Routes>
   <Footer/>
   <ToastContainer />
    </div>
  );
}

export default App;
