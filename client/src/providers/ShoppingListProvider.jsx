import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
    const [shoppingList, setShoppingList] = useState([]);
    const [crossedOutItems, setCrossedOutItems] = useState(new Set());

    return (
        <ShoppingListContext.Provider
            value={{
                shoppingList,
                setShoppingList,
                crossedOutItems,
                setCrossedOutItems,
            }}
        >
            {children}
        </ShoppingListContext.Provider>
    );
};
