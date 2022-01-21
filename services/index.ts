export const LoadProducts = async () => {
    // load the products from the api
    const response = await fetch(process.env.API_URL)
    const products = await response.json()
    return products
    }