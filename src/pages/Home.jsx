import { useState, useEffect } from "react";
import { fetchProducts } from "./API";
import ProductBox from "../components/ProductBox";
import ImageSlider from "../components/Carousel";

export default function Home() {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      setProducts(products);
    }
    fetchData();
  }, []);
  return (
    <div>
        <ImageSlider />
       {/* {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.image}></img>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <span>
              Rating: {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        ))} */}
      <div>
        <div className="flex justify-between ml-2 mr-2 mt-8 ">
          <div className="box relative group border hover:bg-white rounded-lg w-1/5">
            <div className="boxContent  h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif">
              <h2>Best Selling</h2>
            </div>
            <div className="hoverContent w-98 mt-8 left-0 bg-blue-100 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200 overflow-visible">
              <h2>Content</h2>
            </div>
          </div>
          <div className="box relative group border hover:bg-white rounded-lg w-1/5">
            <div className="boxContent  h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif">
              <h2>Top Rated</h2>
            </div>
            <div className="hoverContent w-98 mt-8 left-0 bg-blue-100 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200 overflow-visible">
              <h2>Content</h2>
            </div>
          </div>
          <div className="box relative group border hover:bg-white rounded-lg w-1/5">
            <div className="boxContent  h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif">
              <h2>What's New</h2>
            </div>
            <div className="hoverContent w-98 mt-8 left-0 bg-blue-100 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200 overflow-visible">
              <h2>Content</h2>
            </div>
          </div>
          <div className="box relative group border hover:bg-white rounded-lg w-1/5">
            <div className="boxContent  h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif">
              <h2>Coming Soon...</h2>
            </div>
            <div className="hoverContent w-98 mt-8 left-0 bg-blue-100 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-200 overflow-visible">
              <h2>Content</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownItem() {
  return <div></div>;
}
