
function ProductsDetails({selected}) {
    return ( 
        <div>
            <h2>Products Details Page</h2>
            <h3>Nmae: {selected.name}</h3>
            <h3>Price: {selected.price}</h3>
            <img src={selected.imageUrl} height='250' width='250'/>
        </div>
     );
}

export default ProductsDetails;