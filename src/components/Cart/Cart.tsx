import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incrementQty, decrementQty, selectCart, calculateItems, deleteCart } from "../../features/Cart/cartSlice";



type Props = {
    id: number,
    name: string,
    details: string,
    price: number,
    quant: number,
    image: string
}

interface CartProps {
    cart: Props,
  }



export const Cart:React.FC<CartProps> = ({ cart }): JSX.Element => {

    const dispatch = useAppDispatch();

    let { totalQuant, cartItems } = useAppSelector(selectCart);

    useEffect(() => {
      dispatch(calculateItems())
    },[dispatch, cartItems])

  return (
    <>
      <tr className="g-brd-bottom g-brd-gray-light-v3">
        <td className="text-left g-py-25">
          <img
            className="d-inline-block g-width-100 mr-4"
            src="assets/img-temp/150x150/img6.jpg"
            alt="Image Description"
          />
          <div className="d-inline-block align-middle">
            <h4 className="h6 g-color-black">{ cart.name }</h4>
            <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_6 mb-0">
              <li>Color: Black</li>
              <li>Size: MD</li>
            </ul>
          </div>
        </td>
        <td className="g-color-gray-dark-v2 g-font-size-13">$ {cart.price}</td>
        <td>
          <div className="js-quantity input-group u-quantity-v1 g-width-80 g-brd-primary--focus">
            {/* <input
              className="js-result form-control text-center g-font-size-13 rounded-0 g-pa-0"
              type="number"
              value={totalQuant}
            /> */}
            <span>{cart.quant}</span>
            <div className="input-group-addon d-flex align-items-center g-width-30 g-brd-gray-light-v2 g-bg-white g-font-size-12 rounded-0 g-px-5 g-py-6">
              <i className="js-plus g-color-gray g-color-primary--hover fa fa-angle-up" onClick={() => dispatch(incrementQty(cart))}/>
              <i className="js-minus g-color-gray g-color-primary--hover fa fa-angle-down" onClick={() => dispatch(decrementQty(cart))}/>
            </div>
          </div>
        </td>
        <td className="text-right g-color-black">
          <span className="g-color-gray-dark-v2 g-font-size-13 mr-4">
            $ {cart.quant * cart.price}
          </span>
          <span className="g-color-gray-dark-v4 g-color-black--hover g-cursor-pointer">
            <i className="mt-auto fa fa-trash" onClick={() => dispatch(deleteCart(cart))}/>
          </span>
        </td>
      </tr>
    </>
  );
};
