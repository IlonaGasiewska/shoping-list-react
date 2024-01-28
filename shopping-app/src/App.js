import './App.css';
import ShopingList from "./components/ShoppingList/ShoppingList.jsx"
import ProductsList from './components/ProductsList/ProductsList.jsx';
import { useState } from 'react';

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  const addProduct = (productsName) => {
    setShoppingList(prev => [...prev, productsName])
  }

  return (
    <div className="App">
      <ShopingList shoppingList={shoppingList}/>
      <ProductsList addProduct={addProduct}/>
    </div>
  );
}

export default App;
