const ShopingList = ({ shoppingList, deleteProduct }) => {
    return (
      <ul>
        {shoppingList.map(product => (
          <li key={product.key} onClick={() => deleteProduct(product.key)}>
            {product.name}
          </li>
        ))}
      </ul>
    );
  }

  export default ShopingList