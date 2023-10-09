

export default function Product({product}) {
    return (
        <div className="max-w-sm bg-white border-gray-200 rounded-lg shadow m-5 ">
            <div className="flex content-center justify-items-center">
                <img className="p-8 rounded-t-lg h-48" src={product.image} alt={product.title}/>
            </div>
            <div className="bg-[#DDE6ED] p-2">
                <h5>{product.title}</h5>
                <p className="truncate">{product.description}</p>
                <div className="flex place-content-between p-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add to cart</button>
                </div>
            </div>
        </div>
    )
}