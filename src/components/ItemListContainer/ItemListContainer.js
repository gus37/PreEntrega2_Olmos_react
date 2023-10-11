import { useState, useEffect } from "react"; 
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import ItemList from '../ItemList/ItemList.js';
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return (
        <div>
            <h1 className='m-5 title has-text-primary is-size-1-desktop'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;