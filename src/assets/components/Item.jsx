import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
function Item(props) {
  const { item, setCart, cart } = props;
  return (
    <div className="item">
      <div className="counter">
        <span>
          <CiCircleMinus
            onClick={() => {
              const newCart = [...cart];
              for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].title === item.title) {
                  if (newCart[i].quantity === 1) {
                    newCart.splice(i, 1);
                  } else {
                    newCart[i].quantity--;
                  }
                }
              }
              setCart(newCart);
            }}
          />
        </span>
        <span>{item.quantity}</span>
        <span>
          <CiCirclePlus
            onClick={() => {
              const newCart = [...cart];
              for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].title === item.title) {
                  newCart[i].quantity++;
                }
              }
              setCart(newCart);
            }}
          />
        </span>
      </div>
      <div className="name">{item.title}</div>
      <div className="amount">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(item.price * item.quantity)}
      </div>
    </div>
  );
}

export default Item;
