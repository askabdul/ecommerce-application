import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllItems, item } from "../../database/items";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  incrementQty,
  decrementQty,
  selectCart,
  addCart,
} from "../../features/Cart/cartSlice";

import img1 from "./../../images/650x750/img1.jpg";
import img2 from "./../../images/650x750/img2.jpg";
import img3 from "./../../images/650x750/img3.jpg";

import img4 from "./../../images/250x170/img1.jpg";
import img5 from "./../../images/250x170/img2.jpg";
import img6 from "./../../images/250x170/img3.jpg";

export const Item = () => {
  const [param, setParam] = useState<number>(0);
  const [OneItem, setOneItem] = useState<item>();
  const [qty, setQty] = useState<number>(1);

  const incQty = () => {
    setQty((qty) => qty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { totalQuant } = useAppSelector(selectCart);
  

  useEffect(() => {
    if (id !== undefined) {
      setParam(+id);
      const sample = AllItems.find((one) => one.id === param);
      setOneItem(sample);      
    }
  }, [param, id]);

  return (
    <>
      <div>
        {/* Breadcrumbs */}
        <section className="g-brd-bottom g-brd-gray-light-v4 g-py-30">
          <div className="container">
            <ul className="u-list-inline">
              <li className="list-inline-item g-mr-5">
                <a className="u-link-v5 g-color-text" href="#">
                  Home
                </a>
                <i className="g-color-gray-light-v2 g-ml-5 fa fa-angle-right" />
              </li>
              <li className="list-inline-item g-mr-5">
                <a className="u-link-v5 g-color-text" href="#">
                  Pages
                </a>
                <i className="g-color-gray-light-v2 g-ml-5 fa fa-angle-right" />
              </li>
              <li className="list-inline-item g-color-primary">
                <span>Single Product 1</span>
              </li>
            </ul>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* Product Description */}
        <div className="container g-py-50">
          <div className="row">
            <div className="col-lg-7">
              {/* Carousel */}
              <div
                id="carouselCus1"
                className="js-carousel g-pt-10 g-mb-10 slick-initialized slick-slider"
                data-infinite="true"
                data-fade="true"
                data-arrows-classes="u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle"
                data-arrow-left-classes="fa fa-angle-left g-left-40"
                data-arrow-right-classes="fa fa-angle-right g-right-40"
                data-nav-for="#carouselCus2"
              >
                <div
                  className="js-prev u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle fa fa-angle-left g-left-40 slick-arrow"
                  style={{}}
                />
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{ opacity: 1, width: 1905 }}
                  >
                    <div
                      className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{
                        width: 635,
                        position: "relative",
                        left: 0,
                        top: 0,
                        zIndex: 999,
                        opacity: 1,
                        height: "auto",
                      }}
                    >
                      <img
                        className="img-fluid w-100"
                        src={img1}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 635,
                        position: "relative",
                        left: "-635px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        height: "auto",
                      }}
                    >
                      <img
                        className="img-fluid w-100"
                        src={img2}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="js-slide g-bg-cover g-bg-black-opacity-0_1--after slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 635,
                        position: "relative",
                        left: "-1270px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0,
                        height: "auto",
                      }}
                    >
                      <img
                        className="img-fluid w-100"
                        src={img3}
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="js-next u-arrow-v1 g-brd-around g-brd-white g-absolute-centered--y g-width-45 g-height-45 g-font-size-14 g-color-white g-color-primary--hover rounded-circle fa fa-angle-right g-right-40 slick-arrow"
                  style={{}}
                />
              </div>
              <div
                id="carouselCus2"
                className="js-carousel text-center u-carousel-v3 g-mx-minus-5 slick-initialized slick-slider slick-transform-off"
                data-infinite="true"
                data-center-mode="true"
                data-slides-show={3}
                data-is-thumbs="true"
                data-focus-on-select="false"
                data-nav-for="#carouselCus1"
              >
                <div className="slick-list draggable" style={{ padding: 0 }}>
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 645,
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="js-slide g-cursor-pointer g-px-5 slick-slide slick-current slick-center"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={0}
                      style={{ width: 215, height: "auto" }}
                    >
                      <img
                        className="img-fluid"
                        src={img4}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="js-slide g-cursor-pointer g-px-5 slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={0}
                      style={{ width: 215, height: "auto" }}
                    >
                      <img
                        className="img-fluid"
                        src={img5}
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="js-slide g-cursor-pointer g-px-5 slick-slide slick-center"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={0}
                      style={{ width: 215, height: "auto" }}
                    >
                      <img
                        className="img-fluid"
                        src={img6}
                        alt="Image Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Carousel */}
            </div>

            <div className="col-lg-5">
              <div className="g-px-40--lg g-pt-70">
                {/* Product Info */}
                <div className="g-mb-30">
                  <h1 className="g-font-weight-300 mb-4">
                    Men's Water
                    <br />
                    Resistant Jacket
                  </h1>
                  <p>{OneItem?.name}</p>
                </div>
                {/* End Product Info */}
                {/* Price */}
                <div className="g-mb-30">
                  <h2 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-12 text-uppercase mb-2">
                    Price
                  </h2>
                  <span className="g-color-black g-font-weight-500 g-font-size-30 mr-2">
                    ${OneItem?.price}
                  </span>
                  <s className="g-color-gray-dark-v4 g-font-weight-500 g-font-size-16">
                    $101.00
                  </s>
                </div>
                {/* End Price */}
                {/* Accordion */}
                <div
                  id="accordion-01"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div
                    id="accordion-01-heading-01"
                    className="g-brd-y g-brd-gray-light-v3 py-3"
                    role="tab"
                  >
                    <h5 className="g-font-weight-400 g-font-size-default mb-0">
                      <a
                        className="d-block g-color-gray-dark-v5 g-text-underline--none--hover"
                        href="#accordion-01-body-01"
                        data-toggle="collapse"
                        data-parent="#accordion-01"
                        aria-expanded="false"
                        aria-controls="accordion-01-body-01"
                      >
                        Details
                        <span className="float-right g-pos-rel g-top-3 mr-1 fa fa-angle-down" />
                      </a>
                    </h5>
                  </div>
                  <div
                    id="accordion-01-body-01"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="accordion-01-heading-01"
                  >
                    <div className="g-py-10">
                      <p className="g-font-size-12 mb-2">
                        SHELL: 100% POLYESTER
                      </p>
                      <p className="g-font-size-12 mb-2">
                        Always check the care label instructions.
                      </p>
                      <p className="g-font-size-12 mb-2">
                        Professional dry clean only. Remove all detachable parts
                        before cleaning. Do not iron.
                      </p>
                      <p className="g-font-size-12 mb-2">
                        (Navy: Avoid contact with light coloured fabrics and
                        upholstery especially whilst damp.)
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Accordion */}
                {/* Colour */}
                <div
                  className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3"
                  role="tab"
                >
                  <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">
                    Colour
                  </h5>
                  {/* Checkbox */}
                  <label className="form-check-inline u-check mb-0 ml-auto g-mr-10">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline1_1"
                      type="radio"
                    />
                    <span className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                      <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-primary rounded-circle" />
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-mx-10">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline1_1"
                      type="radio"
                    />
                    <span className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                      <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-beige rounded-circle" />
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-mx-10">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline1_1"
                      type="radio"
                    />
                    <span className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                      <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-black rounded-circle" />
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-ml-10 mr-0">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline1_1"
                      type="radio"
                    />
                    <span className="d-block u-check-icon-checkbox-v4 g-brd-transparent g-brd-gray-dark-v4--checked rounded-circle">
                      <i className="d-block g-absolute-centered g-width-12 g-height-12 g-bg-gray-dark-v4 rounded-circle" />
                    </span>
                  </label>
                  {/* End Checkbox */}
                </div>
                {/* End Colour */}
                {/* Size */}
                <div
                  className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3"
                  role="tab"
                >
                  <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">
                    Size
                  </h5>
                  {/* Checkbox */}
                  <label className="form-check-inline u-check mb-0 ml-auto g-mr-15">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline2_1"
                      type="radio"
                    />
                    <span className="d-block g-font-size-12 g-color-primary--checked">
                      S
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-mx-15">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline2_1"
                      type="radio"
                    />
                    <span className="d-block g-font-size-12 g-color-primary--checked">
                      M
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-mx-15">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline2_1"
                      type="radio"
                    />
                    <span className="d-block g-font-size-12 g-color-primary--checked">
                      L
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-mx-15">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline2_1"
                      type="radio"
                    />
                    <span className="d-block g-font-size-12 g-color-primary--checked">
                      XL
                    </span>
                  </label>
                  <label className="form-check-inline u-check mb-0 g-ml-15">
                    <input
                      className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                      name="radInline2_1"
                      type="radio"
                    />
                    <span className="d-block g-font-size-12 g-color-primary--checked">
                      XXL
                    </span>
                  </label>
                  {/* End Checkbox */}
                </div>
                {/* End Size */}
                {/* Quantity */}
                <div
                  className="d-flex justify-content-between align-items-center g-brd-bottom g-brd-gray-light-v3 py-3 g-mb-30"
                  role="tab"
                >
                  <h5 className="g-color-gray-dark-v5 g-font-weight-400 g-font-size-default mb-0">
                    Quantity
                  </h5>
                  <div className="js-quantity input-group u-quantity-v1 g-width-80 g-brd-primary--focus">
                    <input
                      className="js-result form-control text-center g-font-size-13 rounded-0"
                      type="text"
                      value={qty}
                      readOnly
                    />
                    <div className="input-group-addon d-flex align-items-center g-brd-gray-light-v2 g-width-30 g-bg-white g-font-size-13 rounded-0 g-pa-5">
                      <i
                        className="js-plus g-color-gray g-color-primary--hover fa fa-angle-up"
                        onClick={incQty}
                      />
                      <i
                        className="js-minus g-color-gray g-color-primary--hover fa fa-angle-down"
                        onClick={decQty}
                      />
                    </div>
                  </div>
                </div>
                {/* End Quantity */}
                {/* Buttons */}
                <div className="row g-mx-minus-5 g-mb-20">
                  <div className="col g-px-5 g-mb-10">
                    <button
                      className="btn btn-block u-btn-primary g-font-size-12 text-uppercase g-py-15 g-px-25"
                      type="button"
                      // onClick={() => dispatch(addCart(first))}
                    >
                      Add to Cart{" "}
                      <i className="align-middle ml-2 icon-finance-100 u-line-icon-pro" />
                    </button>
                  </div>
                  <div className="col g-px-5 g-mb-10">
                    <button
                      className="btn btn-block u-btn-outline-black g-brd-gray-dark-v5 g-brd-black--hover g-color-gray-dark-v4 g-color-white--hover g-font-size-12 text-uppercase g-py-15 g-px-25"
                      type="button"
                    >
                      Add to Wishlist{" "}
                      <i className="align-middle ml-2 icon-medical-022 u-line-icon-pro" />
                    </button>
                  </div>
                </div>
                {/* End Buttons */}
                {/* Nav Tabs */}
                <ul
                  className="nav d-flex justify-content-between g-font-size-12 text-uppercase"
                  role="tablist"
                  data-target="nav-1-1-default-hor-left"
                >
                  <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                    <a
                      className="nav-link active g-color-primary--parent-active g-pa-0 g-pb-1"
                      data-toggle="tab"
                      href="#nav-1-1-default-hor-left--3"
                      role="tab"
                    >
                      Returns
                    </a>
                  </li>
                  <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                    <a
                      className="nav-link g-color-primary--parent-active g-pa-0 g-pb-1"
                      data-toggle="tab"
                      href="#nav-1-1-default-hor-left--1"
                      role="tab"
                    >
                      View Size Guide
                    </a>
                  </li>
                  <li className="nav-item g-brd-bottom g-brd-gray-dark-v4">
                    <a
                      className="nav-link g-color-primary--parent-active g-pa-0 g-pb-1"
                      data-toggle="tab"
                      href="#nav-1-1-default-hor-left--2"
                      role="tab"
                    >
                      Delivery
                    </a>
                  </li>
                </ul>
                {/* End Nav Tabs */}
                {/* Tab Panes */}
                <div id="nav-1-1-default-hor-left" className="tab-content">
                  <div
                    className="tab-pane fade show active g-pt-30"
                    id="nav-1-1-default-hor-left--3"
                    role="tabpanel"
                  >
                    <p className="g-color-gray-dark-v4 g-font-size-13 mb-0">
                      You can return/exchange your orders in Unify E-commerce.
                      For more information, read our
                      <a href="#">FAQ</a>.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade g-pt-30"
                    id="nav-1-1-default-hor-left--1"
                    role="tabpanel"
                  >
                    <h4 className="g-font-size-15 mb-3">
                      General Clothing Size Guide
                    </h4>
                    {/* Size */}
                    <table>
                      <tbody>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">
                            Unify Size (UK)
                          </td>
                          <td className="align-top g-width-50 g-py-5">S</td>
                          <td className="align-top g-width-50 g-py-5">M</td>
                          <td className="align-top g-width-50 g-py-5">L</td>
                          <td className="align-top g-width-50 g-py-5">XL</td>
                          <td className="align-top g-width-50 g-py-5">XXL</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">UK</td>
                          <td className="align-top g-width-50 g-py-5">6</td>
                          <td className="align-top g-width-50 g-py-5">8</td>
                          <td className="align-top g-width-50 g-py-5">10</td>
                          <td className="align-top g-width-50 g-py-5">12</td>
                          <td className="align-top g-width-50 g-py-5">14</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">
                            Europe
                          </td>
                          <td className="align-top g-width-50 g-py-5">32</td>
                          <td className="align-top g-width-50 g-py-5">34</td>
                          <td className="align-top g-width-50 g-py-5">36</td>
                          <td className="align-top g-width-50 g-py-5">38</td>
                          <td className="align-top g-width-50 g-py-5">40</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">US</td>
                          <td className="align-top g-width-50 g-py-5">2</td>
                          <td className="align-top g-width-50 g-py-5">4</td>
                          <td className="align-top g-width-50 g-py-5">6</td>
                          <td className="align-top g-width-50 g-py-5">8</td>
                          <td className="align-top g-width-50 g-py-5">10</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">
                            Australia
                          </td>
                          <td className="align-top g-width-50 g-py-5">6</td>
                          <td className="align-top g-width-50 g-py-5">8</td>
                          <td className="align-top g-width-50 g-py-5">10</td>
                          <td className="align-top g-width-50 g-py-5">12</td>
                          <td className="align-top g-width-50 g-py-5">14</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-width-150 g-py-5">
                            Japan
                          </td>
                          <td className="align-top g-width-50 g-py-5">7</td>
                          <td className="align-top g-width-50 g-py-5">9</td>
                          <td className="align-top g-width-50 g-py-5">11</td>
                          <td className="align-top g-width-50 g-py-5">13</td>
                          <td className="align-top g-width-50 g-py-5">15</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Size */}
                  </div>
                  <div
                    className="tab-pane fade g-pt-30"
                    id="nav-1-1-default-hor-left--2"
                    role="tabpanel"
                  >
                    {/* Shipping Mehtod */}
                    <table>
                      <thead className="h6 g-brd-bottom g-brd-gray-light-v3 g-color-gray-dark-v3 g-font-size-13">
                        <tr>
                          <th className="g-width-100 g-font-weight-500 g-pa-0 g-pb-10">
                            Destination
                          </th>
                          <th className="g-width-140 g-font-weight-500 g-pa-0 g-pb-10">
                            Delivery type
                          </th>
                          <th className="g-width-150 g-font-weight-500 g-pa-0 g-pb-10">
                            Delivery time
                          </th>
                          <th className="g-font-weight-500 text-right g-pa-0 g-pb-10">
                            Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-py-10">UK</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-font-size-11 g-py-10">
                            2-3 Working days
                          </td>
                          <td className="align-top text-right g-py-10">$5.5</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-py-10" />
                          <td className="align-top g-py-10">Next day</td>
                          <td className="align-top g-font-size-11 g-py-10">
                            Order before 12pm monday - thursday and receive it
                            the next day
                          </td>
                          <td className="align-top text-right g-py-10">$9.5</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-py-10" />
                          <td className="align-top g-py-10">
                            Saturday delivery
                          </td>
                          <td className="align-top g-font-size-11 g-py-10">
                            Saturday delivery for orders placed before 12pm on
                            friday
                          </td>
                          <td className="align-top text-right g-py-10">
                            $12.00
                          </td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-py-10">Europe</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-font-size-11 g-py-10">
                            3-9 Working days
                          </td>
                          <td className="align-top text-right g-py-10">
                            $20.00
                          </td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-12">
                          <td className="align-top g-py-10">America</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-font-size-11 g-py-10">
                            3-9 Working days
                          </td>
                          <td className="align-top text-right g-py-10">
                            $25.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Shipping Mehtod */}
                  </div>
                </div>
                {/* End Tab Panes */}
              </div>
            </div>
          </div>
        </div>
        {/* End Product Description */}
      </div>
    </>
  );
};
