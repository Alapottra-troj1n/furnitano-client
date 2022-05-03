import { useEffect, useState } from "react";


const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async() =>{
        const response = await fetch(`https://still-cove-59195.herokuapp.com/products`)
        const data = await response.json();
        setProducts(data);
    }
    getProducts();

  },[products])

  return [products, setProducts];

};

export default useProducts;