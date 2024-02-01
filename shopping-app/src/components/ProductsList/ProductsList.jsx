import React, { useState } from 'react';
import './ProductsList.css';
import { products } from '../../common/consts/products';
import ProductFilterForm from '../ProductFilterFor]m/ProductFilterForm';

function ProductsList({ addProduct }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFoodOptionIsChecked, setShowFoodOptionIsChecked] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const categories = products.reduce((categoriesArray, product) => {
        !categoriesArray.includes(product.category) && categoriesArray.push(product.category);
        return categoriesArray;
    }, []);

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
        let filtered = products;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        if (showFoodOptionIsChecked) {
            filtered = filtered.filter((product) => product.foodProduct === true);
        }

        if (searchText !== "") {
            filtered = filtered.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        }

        setFilteredProducts(filtered);
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
            />
            <ul>
                {filteredProducts.map((product) => (<li key={product.name} onClick={() => addProduct(product)}>{product.name}</li>))}
            </ul>
        </>
    );
}

export default ProductsList;
