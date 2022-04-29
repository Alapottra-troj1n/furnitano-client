import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {

  //Scroll to Inventory Functionality
  const inventoryRef = useRef(null);
  const handleInventoryScroll = () => {
    inventoryRef.current.scrollIntoView()  
  }

  return (
    <div className="App">
    <Navbar inventoryRef={inventoryRef} handleInventoryScroll={handleInventoryScroll} />
   <Routes>
    <Route path="/" element={<Home inventoryRef={inventoryRef} handleInventoryScroll={handleInventoryScroll} />}></Route>
   </Routes>
    </div>
  );
}

export default App;
