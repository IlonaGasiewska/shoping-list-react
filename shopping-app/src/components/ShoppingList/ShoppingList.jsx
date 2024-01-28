function ShopingList({shoppingList}) {

    return (
        <>
        <h1>Produkty do kupienia:</h1>
            {<ul>
                {shoppingList.map(product => 
                <li>{product}</li>)}
            </ul>}
        </>
    );
  }
  
export default ShopingList;
  