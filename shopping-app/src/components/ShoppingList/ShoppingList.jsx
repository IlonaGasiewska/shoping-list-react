const ShopingList = ({ shoppingList, deleteProduct }) => {
    return (
      <ul>
        <h1>Products to buy:</h1>
        {shoppingList.map(product => (
          <li key={product.key} onClick={() => deleteProduct(product.key)}>
            {product.name}
          </li>
        ))}
      </ul>
    );
  }

  export default ShopingList