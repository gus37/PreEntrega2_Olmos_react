import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className='CardItem m-5 has-background-primary'>
            <header className='Header'>
                <h2 className='ItemHeader card-header-title is-centered is-size-3-desktop has-text-black py-1'>
                    🌺 {name} 🌺
                </h2>
            </header>
            <picture className="card-img">
                <img src={img} alt='nada' className='ItemImg card-image mt-3'/>
            </picture>
            <section className="card-content">
                <p className='Info is-size-3-desktop has-text-black'>
                    Precio: ${price}
                </p>
                <p className='Info is-size-4-desktop has-text-black'>
                    Stock disponible: {stock} unidades.
                </p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option btn button is-large is-responsive is-primary'>🌺 Ver detalle 🌺</button>
            </footer>
        </article>
    )
}

export default Item;