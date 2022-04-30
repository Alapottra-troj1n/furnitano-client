import React from "react";
import { useParams } from "react-router-dom";
import useFetchProduct from "../../Hooks/useFetchProduct";
import { FaDollarSign, FaBoxOpen, FaHospitalUser } from "react-icons/fa";

const ProductPage = () => {
  const params = useParams();
  const id = params.id;
  const [product] = useFetchProduct(id);
  console.log(product);

  return (
    <div>
      <div className="container mx-auto my-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
          {product?.name}{" "}
        </h2>
        <div className="_img-container flex justify-center my-10">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-2/5 rounded-full"
          />
        </div>

        <div className="text-center">

          <div className="stats stats-vertical lg:stats-horizontal">
            <div className="stat">
              <div className="stat-figure text-violet-500">
                <FaBoxOpen className="text-3xl" />
              </div>
              <div className="stat-title text-base md:text-lg lg:text-xl">
                Quantity
              </div>
              <div className="stat-value text-base md:text-lg lg:text-2xl">
                {product?.quantity}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-violet-500">
                <FaDollarSign className="text-3xl" />
              </div>
              <div className="stat-title text-base md:text-lg lg:text-xl">
                Price
              </div>
              <div className="stat-value text-base md:text-lg lg:text-2xl">
                {product?.price}$
              </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-violet-500">
                <FaHospitalUser className="text-3xl" />
              </div>
              <div class="stat-title text-base md:text-lg lg:text-xl">
                Supplier
              </div>
              <div class="stat-value text-base md:text-lg lg:text-2xl">
                {product?.supplier}
              </div>
            </div>
          </div>

            <div className="text-left mt-10">
                    <p>
                        {product?.description}
                    </p>

            </div>
            <div className="text-center my-5">
            <button className="bg-violet-500 hover:bg-violet-700 transition-colors text-white py-3 px-10 rounded-md">DELIVER</button>
            <p className="text-sm mt-1 text-gray-400">This will deduct 1 product from your overall quantity</p>
            </div>




        </div>
      </div>
    </div>
  );
};

export default ProductPage;
