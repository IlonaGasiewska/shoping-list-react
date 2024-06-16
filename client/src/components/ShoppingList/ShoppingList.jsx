import "./ShoppingList.css";
import React, { useContext, useEffect } from "react";
import { ShoppingListContext } from "../../providers/ShoppingListProvider";
import { getShoppingist } from "../../api/gestShoppingList";
import { deleteItemFromShoppingist } from '../../api/deleteItemFromShoppingList'

function ShoppingList() {
  const { shoppingList, setShoppingList, crossedOutItems, setCrossedOutItems } = useContext(ShoppingListContext);

  useEffect(() => {
    async function fetchData() {
      await getShoppingist(setShoppingList);
    }
    fetchData();
  }, [setShoppingList]);

  const handleRightClick = (event, product) => {
    event.preventDefault(); // Zapobiega wyświetleniu domyślnego menu kontekstowego
    setCrossedOutItems(prevCrossedOutItems => {
      const newCrossedOutItems = new Set(prevCrossedOutItems);
      if (newCrossedOutItems.has(product.id)) {
        newCrossedOutItems.delete(product.id);
      } else {
        newCrossedOutItems.add(product.id);
      }
      return newCrossedOutItems;
    });
  };

  return (
    <div className="ShoppingList">
      <div className="springs-holder">
        <div className="spring"></div>
        <div className="spring"></div>
        <div className="spring"></div>
        <div className="spring"></div>
      </div>
      <h1>Produkty do kupienia:</h1>
      {shoppingList.length === 0 && (
        <p className="emptyListMessage">
          Wybierz produkt z listy lub dodaj własny
        </p>
      )}
      <ul>
        {shoppingList.map((product) => (
          <li
            key={product.id}
            onClick={() => { deleteItemFromShoppingist(product.id); getShoppingist(setShoppingList); }}
            onContextMenu={(event) => handleRightClick(event, product)}
            style={{
              textDecoration: crossedOutItems.has(product.id) ? "line-through" : "none",
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
