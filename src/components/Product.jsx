export default function Product({cart, setCart, product }) {

function addToCart(product) {
    const cartItem = {
        ...product,
        quantity: 1
    }
    setCart([...cart, cartItem])
}
  return (
    <div className="max-w-sm bg-white border-gray-200 rounded-lg shadow m-5 ">
      <div className="">
        <img
          className="p-8 rounded-t-lg h-48"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="bg-[#DDE6ED] p-2">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {product.title}
        </h5>
        <p className="truncate ">{product.description}</p>
        <div className="flex place-content-between p-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <button 
          onClick={() => addToCart(product)}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
