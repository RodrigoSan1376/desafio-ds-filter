import './styles.css';
import Filter from './Filter';
import Listing from './Listing';
import { ProductDTO } from '../../models/product';
import { useState, useContext } from 'react';
import { findByPrice } from '../../services/product-service';
import { ContextListCount } from '../../utils/context-listing';

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>(findByPrice(0, Number.MAX_VALUE));

    const { setContextListCount } = useContext(ContextListCount);

    function handleFilter(min: number, max: number) {
        const result = findByPrice(min, max);
        setProducts(result);
        setContextListCount(result.length)
    }

    return(
        <body>
            <Filter onFilter={handleFilter}/>
            <Listing products={products}/>
        </body>
    );
}