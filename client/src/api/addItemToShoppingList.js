import axios from "axios"

export const addItemToShoppingist = async (product) => {
    axios.post('http://localhost:4000/api/shoppingList', product)
        .catch(error => console.log(error))
}