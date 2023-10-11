import "./ItemList.css";
import Item from "../Item/Item.js";

function ItemList({ products }) {
  // console.log(products);

  return (
    <div>
      <h2 className="has-text-white has-background-primary p-5 is-size-2-desktop">
        🌸 🌻 🌹 PROMOCIÓN PRIMAVERA 🌹 🌻 🌸
      </h2>

      <div className="ListGroup card-header is-flex is-justify-content-center is-flex-wrap-wrap my-5">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((prod) => {
            console.log(prod); // Verifica el contenido de prod antes de renderizar
            return <Item key={prod.id} {...prod} />;
          })
        ) : (
          <p>Los productos no están disponibles.</p>
        )}

        {/* {products.map((prod) => (<Item key={prod.id} {...prod} />))} */}
      </div>
    </div>
  );
}

export default ItemList;
