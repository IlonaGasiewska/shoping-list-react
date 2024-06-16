import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../providers/ProductsProvider";
import ProductFilterForm from "../ProductFilterForm/ProductFilterForm";
import { getArticleList } from "../../api/getArticleList";
import { addItemToShoppingist } from "../../api/addItemToShoppingList";
import { getShoppingist } from "../../api/gestShoppingList"
import { ShoppingListContext } from "../../providers/ShoppingListProvider";
import "./ProductsList.css";

function ProductsList() {
  const {
    products,
    setProducts,
    filteredProducts,
    setSelectedCategory,
    setShowFoodOptionIsChecked,
    setSearchText,
    selectedCategory,
    showFoodOptionIsChecked,
    searchText
  } = useContext(ProductsContext);
  const { setShoppingList } = useContext(ShoppingListContext);

  return (
    <div className="ProductsList">
      <h2>Proponowane produkty:</h2>
      <ProductFilterForm
        selectedCategory={selectedCategory}
        showFoodOptionIsChecked={showFoodOptionIsChecked}
        searchText={searchText}
        onCategoryChange={(event) => setSelectedCategory(event.target.value)}
        onShowFoodOptionChange={() => setShowFoodOptionIsChecked(prev => !prev)}
        onSearchTextChange={(event) => setSearchText(event.target.value)}
        newProductsArray={products}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.name} onClick={() => { addItemToShoppingist(product); getShoppingist(setShoppingList) }}>
            {product.name}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={() => getArticleList(setProducts)}>Załaduj artykuły</button>
    </div>
  );
}

export default ProductsList;
