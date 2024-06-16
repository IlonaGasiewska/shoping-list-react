import axios from "axios"

export const deleteItemFromShoppingist = async (id) => {
    axios.delete(`http://localhost:4000/api/shoppingList/${id}`)
        // .then(res => setProducts(res.data))
        .catch(error => console.log(error))
}