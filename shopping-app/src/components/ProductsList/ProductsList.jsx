import './ProductsList.css';
import { products } from "../../common/consts/products"

function ProductsList() {

    return ( 
        <ul>
            {products.map(product => 
            <li key={product.name}>{product.name}</li>)}
        </ul>
    );
  }
  
export default ProductsList;
  