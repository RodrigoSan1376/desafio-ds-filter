import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import { ProductDTO } from '../../models/product';
import { useState } from 'react';
import { findByPrice } from '../../services/product-service';

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(findByPrice(0, Number.MAX_VALUE));

    return(
        <body>
            <Filter />
            <Listing products={products}/>
        </body>
    );
}