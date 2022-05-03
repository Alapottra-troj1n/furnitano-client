import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import HomeSectionOne from "../HomeSectionOne/HomeSectionOne";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

const Home = ({handleInventoryScroll, inventoryRef}) => {
  
  const [products] = useProducts();



  return (
    <div>
     <div className="_hero-section h-screen w-full flex justify-center items-center flex-col">
            <p className="text-sm lg:text-2xl font-medium tracking-widest text-white">MODERN FURNITURE INVENTORY</p>
            <h2 className='text-5xl lg:text-9xl text-white font-thin mt-2 lg:mt-3'>Premium Italian</h2>
            <button className="text-black bg-white py-3 px-7 border-2 text-sm mt-5 lg:mt-3 hover:bg-transparent hover:border-2 hover:text-white transition-all" onClick={handleInventoryScroll} >CHECK INVENTORY</button>
     </div>


     <div className="container mx-auto bg-slate-100 my-20 rounded-md py-10 flex flex-col justify-center items-center ">

      <p className="text-sm lg:text-3xl font-medium tracking-widest text-center _new-arrival-title mb-3 ">INVENTORY OVERVIEW</p> 

      <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ' ref={inventoryRef}>
        {products.slice(0,6).map(product => <ProductCard product={product} key={product._id} />)}
      </div>
      <div className="text-center mt-2">
      <Link to='/manage'> <button className="btn ">Manage Inventory</button></Link>
      </div>
     </div>

     <HomeSectionOne/>
    

    </div>
  );
  
};

export default Home;
