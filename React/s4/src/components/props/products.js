import { useState } from 'react';
import products from'../../Assets/products.json'
import ProductsDetails from './productsdetails';
function Products() {
    const [selected, setselected] = useState(null);
    
    return ( 
        <div>
            <h3>Products Page</h3>
            <table>
                <tr>
                    {
                        products.map((item)=>(
                            <td onClick={()=>setselected(item)}>
                                <img src={item.imageUrl} height='250' width='250'
                                alt={item.name}/>
                            
                            </td>
                        ))
                    }
                </tr>
            </table>
            {
                selected && <ProductsDetails selected={selected} />
            }
        </div>
     );
}

export default Products;