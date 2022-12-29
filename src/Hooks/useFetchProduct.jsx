import { useEffect, useState } from "react";


const useFetchProduct = (id) => {

        const [product, setProduct] = useState();

        useEffect(() => {

            const fetchProduct = async() => {

                const response = await fetch(`https://furnitano-backend.onrender.com/products/${id}`);
                const data = await response.json();
                setProduct(data);

            }
            fetchProduct();


        },[id])


    return [product];
};

export default useFetchProduct;