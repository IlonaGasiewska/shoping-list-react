import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFoodOptionIsChecked, setShowFoodOptionIsChecked] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        filterProducts();
    }, [products, selectedCategory, showFoodOptionIsChecked, searchText]);

    const filterProducts = () => {
        let filtered = products;

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        if (showFoodOptionIsChecked) {
            filtered = filtered.filter(product => product.isFood);
        }

        if (searchText) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                filteredProducts,
                setFilteredProducts,
                selectedCategory,
                setSelectedCategory,
                showFoodOptionIsChecked,
                setShowFoodOptionIsChecked,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
