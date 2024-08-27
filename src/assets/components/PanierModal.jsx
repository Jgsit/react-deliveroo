import { IoMdClose } from "react-icons/io";
import Contenu from "./Contenu";

function PanierModal(props) {
  const { cart, setCart, setShowModal } = props;
  return (
    <div className="modal">
      <div className="modal-overlay">
        <span
          className="close-button"
          onClick={() => {
            setShowModal((prevState) => !prevState);
          }}
        >
          <IoMdClose />
        </span>
        <div className="modal-content">
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
      </div>
    </div>
  );
}
export default PanierModal;
