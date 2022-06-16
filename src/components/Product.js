import React from 'react';
import ProductListPage from '../pages/ProductListPage';

const Product = (props) => {
    return ( 
        <article className='product'>
            <h1>{props.id}</h1>
        </article>
     );
}
 
export default Product;