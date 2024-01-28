import './App.css';
import ShopingList from "./components/ShoppingList/ShoppingList.jsx"
import ProductsList from './components/ProductsList/ProductsList.jsx';
import { useState } from 'react';

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  const addProduct = (productName) => {
    let key;
    shoppingList.length === 0 ? key = 0 : key = shoppingList[shoppingList.length -1].key + 1;
    const product = { name: productName, key };
    setShoppingList(prev => [...prev, product]);
    console.log(shoppingList)
  }

  const deleteProduct = (productKey) => {
    setShoppingList(prev => prev.filter((product) => product.key !== productKey));
  }

  return (
    <div className="App">
      <ShopingList shoppingList={shoppingList} deleteProduct={deleteProduct}/>
      <ProductsList addProduct={addProduct}/>
    </div>
  );
}

export default App