import "./ShoppingList.css";

function ShopingList({ shoppingList, deleteProduct, toggleProduct }) {
  const handleRightClick = (event, product) => {
    event.preventDefault();
    toggleProduct(product.key);
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
            key={product.key}
            onClick={() => deleteProduct(product.key)}
            onContextMenu={(event) => handleRightClick(event, product)}
            style={{
              textDecoration:
                product.completed && "line-through",
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopingList;
