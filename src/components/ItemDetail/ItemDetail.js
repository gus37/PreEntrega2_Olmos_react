import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock})=> {
    return (
        <article className='CardItem m-5 has-background-primary column is-one-third is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
            {/*  */}
            <header className='Header'>
                <h2 className='ItemHeader card-header-title is-centered is-size-3-desktop has-text-black py-1 title'>
                    🌺 {name} 🌺
                </h2>
            </header>
            <picture className="card-img">
                <img src={img} alt={name} className='ItemImg card-image mt-3 is-centered'/>
            </picture>
            <section className="card-content">
                
                <p className='Info is-size-5-desktop has-text-black is-multiline'>
                    Categoría: {category}
                </p>

                <p className='Info m-5 is-size-4-desktop has-text-black is-multiline'>
                    Descripción: {description}
                </p>

                <p className='Info is-size-3-desktop has-text-black is-multiline'>
                    Precio: ${price}
                </p>

            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada ', quantity)}/>
            </footer>
            {/* className='Option btn button is-large is-responsive is-primary' */}
        </article>
    )
}

export default ItemDetail;
