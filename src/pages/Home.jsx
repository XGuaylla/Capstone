import { useState, useEffect } from "react"
import { fetchProducts } from "./API"

export default function Home() {
    const [products, setProducts] = useState()
    useEffect(() => {
        async function fetchData() {
            const products = await fetchProducts()
            setProducts(products)
        }
        fetchData()
    }, [])
    return (
        <div>
            {/* {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image}></img>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <span>Rating: {product.rating.rate} ({product.rating.count})</span>
                </div>
            ))} */}
            <div className="flex justify-between ml-2 mr-2 mt-8">
                <div className="container w-1/5 h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif " >
                    <h2>Best Selling</h2>
                </div>
                <div className="container w-1/5 h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif " >
                    <h2>Top Rated</h2>
                </div>
                <div className="container w-1/5 h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif " >
                    <h2>What's New</h2>
                </div>
                <div className="container w-1/5 h-40 bg-[#DDE6ED] rounded-lg flex justify-center items-center drop-shadow-xl text-3xl font-serif " >
                    <h2>Coming Soon</h2>
                </div>
            </div>
        </div>
    )
}

function DropdownItem() {
    return (
        <div></div>
    )
}