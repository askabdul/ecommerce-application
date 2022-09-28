import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incrementQty, decrementQty, selectCart, addCart } from "../../features/Cart/cartSlice";

type Props = {
    id: number,
    name: string,
    details: string,
    price: number,
    images: string[]
}

interface ItemProps {
    item: Props,
  }



export const Single:React.FC<ItemProps> = ({ item }): JSX.Element => {


  const dispatch = useAppDispatch();

  const { totalQuant } = useAppSelector(selectCart);


    return (
        <>
            <div className="col-md-6 col-lg-4 g-px-10">
              {/* Article */}
              <article className="media g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-pa-10 g-mb-20">
                {/* Article Image */}
                <div className="g-max-width-100 g-mr-15">
                  <img
                    className="d-flex w-100"
                    src="assets/img-temp/150x150/img1.jpg"
                    alt="Image Description"
                  />
                </div>
                {/* End Article Image */}
                {/* Article Info */}
                <div className="media-body align-self-center">
                  <h4 className="h5 g-mb-7">
                    <Link
                      className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                      to={`/items/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </h4>
                  <a
                    className="d-inline-block g-color-gray-dark-v5 g-font-size-13 g-mb-10"
                    href="#"
                  >
                    {item.details}
                  </a>
                  {/* End Article Info */}
                  {/* Article Footer */}
                  <footer className="d-flex justify-content-between g-font-size-16">
                    <span className="g-color-black g-line-height-1">
                      ${item.price}
                    </span>
                    <ul className="list-inline g-color-gray-light-v2 g-font-size-14 g-line-height-1">
                      <li className="list-inline-item align-middle g-brd-right g-brd-gray-light-v3 g-pr-10 g-mr-6">
                        <button
                          className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                          title="Add to Cart"
                          data-toggle="tooltip"
                          data-placement="top"
                          onClick={() => dispatch(addCart(item))}
                        >
                          <i className="icon-finance-100 u-line-icon-pro" />
                        </button>
                      </li>
                      <li className="list-inline-item align-middle">
                        <a
                          className="g-color-gray-dark-v5 g-color-primary--hover g-text-underline--none--hover"
                          href="#"
                          title="Add to Wishlist"
                          data-toggle="tooltip"
                          data-placement="top"
                        >
                          <i className="icon-medical-022 u-line-icon-pro" />
                        </a>
                      </li>
                    </ul>
                  </footer>
                  {/* End Article Footer */}
                </div>
              </article>
              {/* End Article */}
            </div>
        </>
    )
}