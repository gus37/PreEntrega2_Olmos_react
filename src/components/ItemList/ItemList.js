import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      <h2 className="has-text-white has-background-primary p-5 is-size-2-desktop">🌸 🌻 🌹 PROMOCIÓN PRIMAVERA 🌹 🌻 🌸</h2>

      <div className="ListGroup card-header is-flex is-justify-content-center is-flex-wrap-wrap my-5">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
