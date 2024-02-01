const ShopingList = ({ shoppingList, deleteProduct }) => {
    return (
    <>
        <h1>Produkty do kupienia:</h1>
        <ul>
            {shoppingList.map(product => (
                <li key={product.key} onClick={() => deleteProduct(product.key)}>
                    {product.name}
                </li>))}
        </ul>
    </>
    );
  }

  export default ShopingList