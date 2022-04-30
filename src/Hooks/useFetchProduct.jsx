import { useEffect, useState } from "react";


const useFetchProduct = (id) => {

        const [product, setProduct] = useState();

        useEffect(() => {

            const fetchProduct = async() => {

                const response = await fetch(`https://still-cove-59195.herokuapp.com/products/${id}`);
                const data = await response.json();
                setProduct(data);

            }
            fetchProduct();


        },[id])


    return [product];
};

export default useFetchProduct;