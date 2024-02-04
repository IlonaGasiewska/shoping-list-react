import './App.css';
import ShopingList from "./components/ShoppingList/ShoppingList.jsx"
import ProductsList from './components/ProductsList/ProductsList.jsx';
import { useState } from 'react';


function App() {

  const [shoppingList, setShoppingList] = useState([]);

  const addProduct = (productPassed) => {
    let key;
    shoppingList.length === 0 ? key = 0 : key = shoppingList[shoppingList.length -1].key + 1;
    const product = { name: productPassed.name, key, category: productPassed.category, food: productPassed.food};
    setShoppingList(prev => [...prev, product]);
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