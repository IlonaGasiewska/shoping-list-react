import "./App.css";
import ShopingList from "./components/ShoppingList/ShoppingList.jsx";
import ProductsList from "./components/ProductsList/ProductsList.jsx";
import { useState } from "react";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const addProduct = (productPassed) => {
    let key;
    shoppingList.length === 0
      ? (key = 0)
      : (key = shoppingList[shoppingList.length - 1].key + 1);
    const product = {
      name: productPassed.name,
      key,
      category: productPassed.category,
      food: productPassed.food,
      completed: false,
    };
    setShoppingList((prev) => [...prev, product]);
  };

  const deleteProduct = (productKey) => {
    setShoppingList((prev) =>
      prev.filter((product) => product.key !== productKey)
    );
  };

  const toggleProduct = (productKey) => {
    setShoppingList((prev) =>
      prev.map((product) =>
        product.key === productKey
          ? { ...product, completed: !product.completed }
          : product
      )
    );
  };

  return (
    <div className="App">
      <ShopingList
        shoppingList={shoppingList}
        deleteProduct={deleteProduct}
        toggleProduct={toggleProduct}
      />
      <ProductsList addProduct={addProduct} />
    </div>
  );
}

export default App;
