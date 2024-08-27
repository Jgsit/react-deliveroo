function Meal(props) {
  const { data, setCart, cart } = props;

  return (
    <div className="meal">
      <div
        className="card"
        onClick={() => {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].title === data.title) {
              const newCart = [...cart];
              newCart[i].quantity++;
              return setCart(newCart);
            }
          }
          const newCart = [...cart];
          newCart.push({ title: data.title, quantity: 1, price: data.price });
          setCart(newCart);
        }}
      >
        <div className="text">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="infos">
            <span>{data.price} €</span>
            {data.popular && (
              <span className="popular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff8000"
                  className="feather feather-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Populaire
              </span>
            )}
          </div>
        </div>
        <div className="picture">
          {data.picture !== undefined && (
            <img src={data.picture} alt="Un repas" />
          )}
        </div>
      </div>
    </div>
  );
}
export default Meal;
