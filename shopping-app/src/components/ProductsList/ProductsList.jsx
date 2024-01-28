import './ProductsList.css';
import { products } from "../../common/consts/products"

function ProductsList({ addProduct }) {
    return ( 
        <>
            <h2>Produkty:</h2>
            <ul>
                {products.map(product => 
                    <li key={product.name} onClick={() => addProduct(product.name)}>
                        {product.name}
                    </li>
                )}
            </ul>
        </>
    );
}
  
export default ProductsList;
  