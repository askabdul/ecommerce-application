export const EmptyCart = () => {
  return (
    <>
      <div className="container text-center g-py-100">
        <div className="mb-5">
          <span className="d-block g-color-gray-light-v1 g-font-size-70 g-font-size-90--md mb-4">
            <i className="icon-hotel-restaurant-105 u-line-icon-pro" />
          </span>
          <h2 className="g-mb-30">Your Cart is Currently Empty</h2>
          <p>
            Before proceed to checkout you must add some products to your
            shopping cart.
            <br />
            You will find a lot of interesting products on our "Shop" page.
          </p>
        </div>
        <a
          className="btn u-btn-primary g-font-size-12 text-uppercase g-py-12 g-px-25"
          href="#"
        >
          Start Shopping
        </a>
      </div>
    </>
  );
};
