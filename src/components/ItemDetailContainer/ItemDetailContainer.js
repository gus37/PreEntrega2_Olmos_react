import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(()=> {
        getProductById('4')
            .then(response => {
                setProduct(response)
            })
            .catch(error=> {
                console.error(error)
            })
    }, [])

    return(
        
        <div className='ItemDetailContainer is-flex is-justify-content-center is-align-items-center columns'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;