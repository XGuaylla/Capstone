import { useState, useEffect } from "react";
import { fetchProducts } from "./API";
import ProductBox from "../components/ProductBox";
import ImageSlider from "../components/Carousel";
import MultiCarousel from "../components/MultiCarousel";
import Product from "../components/Product";

export default function Home({cart, setCart}) {
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
      {/* <div>
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
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-wrap justify-between">
        {products &&
          products.map((product, i) => {
            return (
              <div key={i}>
                <Product cart={cart} setCart={setCart} product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
