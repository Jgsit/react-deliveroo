import Contenu from "./Contenu";

function Panier(props) {
  const { cart, setCart } = props;
  return (
    <div className="card">
      <button className={cart.length === 0 ? "empty" : "valider"}>
        Valider mon panier
      </button>
      <div className={cart.length === 0 ? "cart--empty" : "cart"}>
        {cart.length === 0 ? (
          "Votre panier est vide"
        ) : (
          <Contenu cart={cart} setCart={setCart} />
        )}
      </div>
    </div>
  );
}

export default Panier;
