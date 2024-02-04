import React, { useState } from "react";
import "./ProductsList.css";
import { products } from "../../common/consts/products";
import ProductFilterForm from "../ProductFilterForm/ProductFilterForm";
import ProductAddForm from "../ProductAddForm/ProductAddForm";
import { useEffect } from "react";

function ProductsList({ addProduct }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFoodOptionIsChecked, setShowFoodOptionIsChecked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleShowFoodOptionChange = () => {
    setShowFoodOptionIsChecked(!showFoodOptionIsChecked);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    let filtered = newProductsAray;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (showFoodOptionIsChecked) {
      filtered = filtered.filter((product) => product.foodProduct === true);
    }

    if (searchText !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    handleSearch();
  }, [selectedCategory, showFoodOptionIsChecked, searchText]);

  const [newProductsAray, setNewProductArray] = useState([...products]);
  const [newProductCategory, setNewProductCategory] = useState("");
  const [newProductIsFood, setNewProductIsFood] = useState(false);
  const [newProductName, setNewProductName] = useState("");

  const handleSetName = (e) => {
    setNewProductName(e.target.value);
  };

  const handleSetNewProductCategory = (e) => {
    setNewProductCategory(e.target.value);
  };

  const handleSetNewProductIsFood = () => {
    setNewProductIsFood((prev) => !prev);
  };

  const handleSetNewArray = () => {
    setNewProductArray((prev) => [
      ...prev,
      {
        name: newProductName,
        category: newProductCategory,
        foodProduct: newProductIsFood,
      },
    ]);
    console.log(newProductsAray);
  };

  return (
    <>
      <h2>Proponowane produkty:</h2>
      <ProductFilterForm
        selectedCategory={selectedCategory}
        showFoodOptionIsChecked={showFoodOptionIsChecked}
        searchText={searchText}
        onCategoryChange={(event) => setSelectedCategory(event.target.value)}
        onShowFoodOptionChange={() => setShowFoodOptionIsChecked(!showFoodOptionIsChecked)}
        onSearchTextChange={(event) => setSearchText(event.target.value)}
        onSearch={handleSearch}
        newProductsAray={newProductsAray}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.name} onClick={() => addProduct(product)}>
            {product.name}
          </li>
        ))}
      </ul>
      <ProductAddForm
        handleSetName={(event) => handleSetName(event)}
        newProductName={newProductName}
        handleSetNewProductCategory={(event) => handleSetNewProductCategory(event)}
        newProductCategory={newProductCategory}
        newProductIsFood={newProductIsFood}
        handleSetNewProductIsFood={() => handleSetNewProductIsFood()}
        handleSetNewArray={handleSetNewArray}
      />
    </>
  );
}

export default ProductsList;