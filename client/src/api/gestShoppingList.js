import axios from "axios"

export const getShoppingist = async (setSchoppingList) => {
    axios.get('http://localhost:4000/api/shoppingList')
        .then(res => setSchoppingList(res.data))
        .catch(error => console.log(error))
}