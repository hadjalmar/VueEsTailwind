const API_URL = "http://localhost:3000/api/products";

const getProducts = async()=>{
    const response = await fetch(API_URL);
    return response.json();
}
const createProduct = async(product)=>{
    const resp = await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/jsom'},
        body: JSON.stringify(product)
    })
    return resp.json();
}
export {getProducts, createProduct};