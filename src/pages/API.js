const BASE_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}`)
        const result = await response.json()
        console.log(result)
        return result
    } catch (err) {
        console.error(err)
    }
}