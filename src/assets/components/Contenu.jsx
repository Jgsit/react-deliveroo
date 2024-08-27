import Item from "./Item";

function Contenu(props) {
  const { cart, setCart } = props;
  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].quantity !== 0) {
      subTotal += cart[i].price * cart[i].quantity;
    }
  }

  return (
    <>
      <div className="items">
        {cart.map((item) => {
          return (
            <Item key={item.title} item={item} setCart={setCart} cart={cart} />
          );
        })}
      </div>
      <div className="results">
        <div className="soustotal">
          <span>Sous-total</span>
          <span>
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(subTotal)}
          </span>
        </div>
        <div className="fraislivraison">
          <span>Frais de livraison</span>
          <span>2,50 €</span>
        </div>
      </div>
      <div className="total">
        <span>Total</span>
        <span>
          {" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(subTotal + 2.5)}
        </span>
      </div>
    </>
  );
}

export default Contenu;
