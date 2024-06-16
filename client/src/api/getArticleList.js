import axios from "axios"

export const getArticleList = async (setProducts) => {
    axios.get('http://localhost:4000/api/productsList')
        .then(res => setProducts(res.data))
        .catch(error => console.log(error))
}