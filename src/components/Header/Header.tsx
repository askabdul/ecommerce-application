import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { selectCart } from "../../features/Cart/cartSlice";

export const Header = () => {
  
  let { cartItems } = useAppSelector(selectCart);

  return (
    <>
      {/* Header */}
      <header id="js-header" className="u-header u-header--sticky u-shadow-v19" style={{position: 'sticky', top: 0, background: "#fff"}}>
        {/* Top Bar */}
        <div className="u-header__section g-brd-bottom g-brd-gray-light-v4 g-transition-0_3">
          <div className="container">
            <div className="row justify-content-between align-items-center g-mx-0--lg">
              <div className="col-12 col-sm-auto order-sm-2 g-py-5 g-py-20--sm text-center">
                {/* Logo */}
                <a className="navbar-brand" href="home-page-1.html">
                  <img
                    src="assets/img/logo/logo-1.png"
                    alt="Image Description"
                  />
                </a>
                {/* End Logo */}
              </div>
              <div className="col-6 col-sm-auto order-sm-1 g-pl-0--sm g-py-5 g-py-20--sm">
                {/* Search */}
                <div className="d-inline-block g-valign-middle">
                  <div className="g-py-10 g-pr-40">
                    <a
                      className="g-color-text g-color-black--hover g-color-black--focus g-font-size-16 g-text-underline--none--hover"
                      href="#"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="searchform-1"
                      data-dropdown-event="hover"
                      data-dropdown-target="#searchform-1"
                      data-dropdown-type="css-animation"
                      data-dropdown-duration={300}
                      data-dropdown-animation-in="fadeInUp"
                      data-dropdown-animation-out="fadeOutDown"
                    >
                      <i className="align-middle mr-2 icon-education-045 u-line-icon-pro" />
                      <span className="g-font-size-default g-pos-rel g-top-minus-2">
                        Search
                      </span>
                    </a>
                  </div>
                  {/* Search Form */}
                  <form
                    id="searchform-1"
                    className="u-searchform-v1 u-dropdown--css-animation u-dropdown--hidden u-shadow-v20 g-max-width-400 g-brd-around g-brd-gray-light-v4 g-bg-white rounded g-left-0 g-pa-10"
                  >
                    <div className="input-group">
                      <input
                        className="form-control rounded-0 u-form-control border-0 g-font-size-13 g-py-12"
                        type="search"
                        placeholder="Enter Your Search Here..."
                      />
                      <div className="input-group-addon g-brd-none p-0">
                        <button
                          className="btn u-btn-primary g-font-size-12 rounded text-uppercase g-py-12 g-px-15"
                          type="submit"
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* End Search Form */}
                </div>
                {/* End Search */}
              </div>
              <div className="col-6 col-sm-auto order-sm-3 g-py-5 g-pr-0 g-py-20--sm">
                {/* Login */}
                <div className="d-inline-block">
                  <a
                    className="u-icon-v1 g-color-text g-color-black--hover g-color-black--focus g-font-size-16 g-text-underline--none--hover"
                    href="page-login-1.html"
                  >
                    <i className="icon-finance-067 u-line-icon-pro" />
                  </a>
                </div>
                {/* End Login */}
                {/* Wishlist */}
                <div className="d-inline-block">
                  <a
                    className="u-icon-v1 g-color-text g-color-black--hover g-color-black--focus g-font-size-16 g-text-underline--none--hover"
                    href="page-wishlist-1.html"
                  >
                    <i className="icon-medical-022 u-line-icon-pro" />
                  </a>
                </div>
                {/* End Wishlist */}
                {/* Basket */}
                <div className="u-basket d-inline-block">
                  <Link
                    id="basket-bar-invoker"
                    className="u-icon-v1 g-color-text g-color-black--hover g-color-black--focus g-font-size-16 g-text-underline--none--hover g-ml-10"
                    to="/items"
                    aria-controls="basket-bar"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-dropdown-event="hover"
                    data-dropdown-target="#basket-bar"
                    data-dropdown-type="css-animation"
                    data-dropdown-duration={300}
                    data-dropdown-hide-on-scroll="false"
                    data-dropdown-animation-in="fadeIn"
                    data-dropdown-animation-out="fadeOut"
                  >
                    <i className="d-inline-block icon-hotel-restaurant-105 u-line-icon-pro" />
                    <span className="align-bottom g-font-size-11">({cartItems.length})</span>
                  </Link>
                  <div
                    id="basket-bar"
                    className="u-basket__bar u-dropdown--css-animation u-dropdown--hidden g-text-transform-none g-bg-white g-brd-around g-brd-gray-light-v4 g-mt-5 g-mt-25--sm"
                    aria-labelledby="basket-bar-invoker"
                  >
                    <div className="g-brd-bottom g-brd-gray-light-v4 g-pa-15 g-mb-10">
                      <span className="d-block h6 text-center text-uppercase mb-0">
                        Shopping Cart
                      </span>
                    </div>
                    <div className="js-scrollbar g-height-200">
                      {/* Product */}
                      <div className="u-basket__product g-brd-none g-px-20">
                        <div className="row no-gutters g-pb-5">
                          <div className="col-4 pr-3">
                            <a className="u-basket__product-img" href="#">
                              <img
                                className="img-fluid"
                                src="../assets/img-temp/150x150/img1.jpg"
                                alt="Image Description"
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            <h6 className="g-font-weight-400 g-font-size-default">
                              <a
                                className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                href="#"
                              >
                                Black Glasses
                              </a>
                            </h6>
                            <small className="g-color-primary g-font-size-12">
                              1 x $22.00
                            </small>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="u-basket__product-remove"
                        >
                          ×
                        </button>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="u-basket__product g-brd-none g-px-20">
                        <div className="row no-gutters g-pb-5">
                          <div className="col-4 pr-3">
                            <a className="u-basket__product-img" href="#">
                              <img
                                className="img-fluid"
                                src="../assets/img-temp/150x150/img2.jpg"
                                alt="Image Description"
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            <h6 className="g-font-weight-400 g-font-size-default">
                              <a
                                className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                href="#"
                              >
                                Gloves
                              </a>
                            </h6>
                            <small className="g-color-primary g-font-size-12">
                              2 x $55.00
                            </small>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="u-basket__product-remove"
                        >
                          ×
                        </button>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="u-basket__product g-brd-none g-px-20">
                        <div className="row no-gutters g-pb-5">
                          <div className="col-4 pr-3">
                            <a className="u-basket__product-img" href="#">
                              <img
                                className="img-fluid"
                                src="../assets/img-temp/150x150/img3.jpg"
                                alt="Image Description"
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            <h6 className="g-font-weight-400 g-font-size-default">
                              <a
                                className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                href="#"
                              >
                                Chukka Shoes
                              </a>
                            </h6>
                            <small className="g-color-primary g-font-size-12">
                              1 x $199.00
                            </small>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="u-basket__product-remove"
                        >
                          ×
                        </button>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="u-basket__product g-brd-none g-px-20">
                        <div className="row no-gutters g-pb-5">
                          <div className="col-4 pr-3">
                            <a className="u-basket__product-img" href="#">
                              <img
                                className="img-fluid"
                                src="../assets/img-temp/150x150/img4.jpg"
                                alt="Image Description"
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            <h6 className="g-font-weight-400 g-font-size-default">
                              <a
                                className="g-color-black g-color-primary--hover g-text-underline--none--hover"
                                href="#"
                              >
                                Desk Clock
                              </a>
                            </h6>
                            <small className="g-color-primary g-font-size-12">
                              1 x $12.00
                            </small>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="u-basket__product-remove"
                        >
                          ×
                        </button>
                      </div>
                      {/* End Product */}
                    </div>
                    <div className="clearfix g-px-15">
                      <div className="row align-items-center text-center g-brd-y g-brd-gray-light-v4 g-font-size-default">
                        <div className="col g-brd-right g-brd-gray-light-v4">
                          <strong className="d-block g-py-10 text-uppercase g-color-main g-font-weight-500 g-py-10">
                            Total
                          </strong>
                        </div>
                        <div className="col">
                          <strong className="d-block g-py-10 g-color-main g-font-weight-500 g-py-10">
                            $433.00
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="g-pa-20">
                      <div className="text-center g-mb-15">
                        <a
                          className="text-uppercase g-color-primary g-color-main--hover g-font-weight-400 g-font-size-13 g-text-underline--none--hover"
                          href="page-checkout-1.html"
                        >
                          View Cart
                          <i className="ml-2 icon-finance-100 u-line-icon-pro" />
                        </a>
                      </div>
                      <a
                        className="btn btn-block u-btn-black g-brd-primary--hover g-bg-primary--hover g-font-size-12 text-uppercase rounded g-py-10"
                        href="page-checkout-1.html"
                      >
                        Proceed to Checkout
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Basket */}
              </div>
            </div>
          </div>
        </div>
        {/* End Top Bar */}
        <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3">
          <nav className="js-mega-menu navbar navbar-expand-lg">
            <div className="container">
              {/* Responsive Toggle Button */}
              <button
                type="button"
                className="navbar-toggler navbar-toggler-right btn ml-auto g-line-height-1 g-brd-none g-pa-0"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar"
              >
                <span className="hamburger hamburger--slider">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </span>
              </button>
              {/* End Responsive Toggle Button */}
              {/* Navigation */}
              <div
                id="navBar"
                className="collapse navbar-collapse align-items-center flex-sm-row"
              >
                <ul className="navbar-nav mx-auto">
                  {/* Home - Submenu */}
                  <li className="nav-item hs-has-sub-menu g-mx-10--lg g-mx-15--xl">
                    <Link
                      id="nav-link--home"
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      to="/"
                      aria-haspopup="true"
                      aria-expanded="false"
                      aria-controls="nav-submenu--home"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn"
                    data-animation-out="fadeOut"
                    data-position="right"
                  >
                    <a
                      id="mega-menu-label-3"
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      href="#"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categories
                      <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                    </a>
                    {/* Mega Menu */}
                    <div
                      className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-7"
                      aria-labelledby="mega-menu-label-3"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-2 g-mb-30 g-mb-0--md">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Home Decor
                            </span>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Wall Decor
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Pillows &amp; Throws
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Window Treatments
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Mirrors
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Industrial Decor
                          </span>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Letter Block
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Glass Sconce
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Risa Storage Jar
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Model Plane
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                        <div className="col-sm-6 col-lg-3 g-mb-30 g-mb-0--md">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Kitchen &amp; Tabletop
                            </span>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Coffee &amp; Tea
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Cooking &amp; Baking
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Cutlery &amp; Cutting
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Serving
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Food Storage
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          <div className="mb-5 g-mb-0--lg">
                            {/* Links */}
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Office
                            </span>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Writing Instruments
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Bookcases
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Filing Cabinets
                                </a>
                              </li>
                            </ul>
                            {/* End Links */}
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 g-mb-30 g-mb-0--md">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Modern Lighting
                            </span>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Bridgers 59" Floor Lamp
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Miltiades 27" Table Lamp
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Coastal Living Room Furniture
                          </span>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Washington Console Table
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Anfield Coffee Table
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Banbury 2 Drawer End Table
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Landsdowne 53" Tv Stand
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Sevan Swivel Barrel Chair
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Enfield Credenza
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                        <div className="col-md-6 col-lg-4 g-mb-30 g-mb-0--md">
                          <article className="g-pos-rel">
                            <img
                              className="img-fluid"
                              src="assets/img-temp/700x700/img1.jpg"
                              alt="Image Description"
                            />
                            <div className="g-pos-abs g-bottom-30 g-left-30">
                              <span className="d-block g-color-gray-dark-v4 mb-2">
                                Modern Lighting
                              </span>
                              <span className="d-block h4">
                                Desk Clock 65" Table Lamp
                              </span>
                              <span className="d-block g-color-gray-dark-v3 g-font-size-16 mb-4">
                                $156.00
                              </span>
                              <a
                                className="btn u-btn-primary u-shadow-v29 g-font-size-12 text-uppercase g-py-10 g-px-20"
                                href="#"
                              >
                                Add to Cart
                              </a>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End Categories - Mega Menu */}
                  {/* Watch - Mega Menu */}
                  <li
                    className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn"
                    data-animation-out="fadeOut"
                    data-position="right"
                  >
                    <a
                      id="mega-menu-label-2"
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      href="#"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Watch
                      <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                    </a>
                    {/* Mega Menu */}
                    <div
                      className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-mt-7"
                      aria-labelledby="mega-menu-label-2"
                    >
                      <div className="row no-gutters">
                        <div className="col-md-4 g-mb-30 g-mb-0--md">
                          <div className="g-pa-30">
                            {/* Links */}
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Watches
                            </span>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Ladies' Parker Chronograph
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Emporio Armani
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Fossil Men's Grant Chronograph
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Olivia Burton{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Ladies' Big White Dial
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Men's Grant Automatic
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Ladies' The Roxy
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Sport Watch
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Burberry Ladies' The City
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Tissot
                                </a>
                              </li>
                            </ul>
                            {/* End Links */}
                          </div>
                        </div>
                        <div
                          className="col-md-8 g-min-height-400 g-bg-size-cover g-bg-pos-center"
                          data-bg-img-src="assets/img-temp/700x467/img1.jpg"
                        >
                          <article className="g-pa-30">
                            <span className="d-block g-color-white-opacity-0_8 text-uppercase mb-2">
                              Bestseller
                            </span>
                            <span className="d-block h1 g-color-white">
                              MVMTH Swiss Watch
                            </span>
                            <span className="d-block g-color-primary g-font-weight-700 g-font-size-25">
                              $273.00
                            </span>
                            <a className="u-link-v2" href="#" />
                          </article>
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End Watch - Mega Menu */}
                  {/* Mega Menu Item */}
                  <li
                    className="hs-has-mega-menu nav-item g-mx-10--lg g-mx-15--xl"
                    data-animation-in="fadeIn"
                    data-animation-out="fadeOut"
                    data-position="right"
                  >
                    <a
                      id="mega-menu-label-4"
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      href="#"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Catalogue
                      <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                    </a>
                    {/* Mega Menu */}
                    <div
                      className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-7"
                      aria-labelledby="mega-menu-label-4"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Clothes
                            </span>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  New in
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Coats &amp; Jackets
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Jeans
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Dresses
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Shorts
                                  <span className="u-label g-bg-primary rounded g-ml-10">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Skirts
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  T-Shirts
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Shoes
                          </span>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Boots
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                FLats
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Heels
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Sandals
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                        <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Accessories
                            </span>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  All accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Bags &amp; Purses
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Scarvs &amp; Hats
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Jewellery
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Fragrance &amp; Beauty
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Lingerie
                            </span>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Linger
                                  <span className="u-label g-bg-primary rounded g-ml-10">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Slippers
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Nightwear
                          </span>
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Nightwear
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Socks
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                        <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Mixed
                          </span>
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                New in
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Coats &amp; Jackets
                                <span className="u-label g-bg-primary rounded g-ml-10">
                                  New
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Jeans
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Dresses
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Shorts
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Skirts
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                T-shirts
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Boots
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Flats
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Heels
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Sandals
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Sports
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Socks
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Tights
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                        <div className="col-sm-6 col-md-3 g-mb-30 g-mb-0--sm">
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Accessories
                            </span>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  All accessories
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Bags &amp; Purses
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Scarvs &amp; Hats
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Jewellery
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Fragrance &amp; Beauty
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <div className="mb-5">
                            <span className="d-block g-font-weight-500 text-uppercase mb-2">
                              Lingerie
                            </span>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Linger
                                  <span className="u-label g-bg-primary rounded g-ml-10">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                  href="#"
                                >
                                  Slippers
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End Links */}
                          {/* Links */}
                          <span className="d-block g-font-weight-500 text-uppercase mb-2">
                            Nightwear
                          </span>
                          <ul className="list-unstyled mb-0">
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Nightwear
                              </a>
                            </li>
                            <li>
                              <a
                                className="d-block g-color-text g-color-primary--hover g-text-underline--none--hover g-py-5"
                                href="#"
                              >
                                Socks
                              </a>
                            </li>
                          </ul>
                          {/* End Links */}
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End Mega Menu Item */}
                  {/* New Arrivals - Mega Menu */}
                  <li
                    className="hs-has-mega-menu nav-item g-ml-10--lg g-ml-15--xl"
                    data-animation-in="fadeIn"
                    data-animation-out="fadeOut"
                    data-position="right"
                  >
                    <a
                      id="mega-menu-label-5"
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      href="#"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      New Arrivals
                      <i className="hs-icon hs-icon-arrow-bottom g-font-size-11 g-ml-7" />
                    </a>
                    {/* Mega Menu */}
                    <div
                      className="w-100 hs-mega-menu u-shadow-v11 g-text-transform-none g-brd-top g-brd-primary g-brd-top-2 g-bg-white g-pa-30 g-mt-7"
                      aria-labelledby="mega-menu-label-5"
                    >
                      <div className="row">
                        <div className="col-md-4 g-mb-30 g-mb-0--md">
                          {/* Article */}
                          <article
                            className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                            data-bg-img-src="assets/img-temp/600x400/img1.jpg"
                          >
                            <div className="g-pos-rel g-z-index-1">
                              <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                Blouse
                              </span>
                              <span className="d-block h2 g-color-white mb-4">
                                Lafayette
                              </span>
                              <a
                                className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                href="#"
                              >
                                Shop Now
                              </a>
                            </div>
                          </article>
                          {/* End Article */}
                        </div>
                        <div className="col-md-4 g-mb-30 g-mb-0--md">
                          {/* Article */}
                          <article
                            className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                            data-bg-img-src="assets/img-temp/600x400/img2.jpg"
                          >
                            <div className="g-pos-rel g-z-index-1">
                              <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                Hamburg Hats
                              </span>
                              <span className="d-block h2 g-color-white mb-4">
                                Beaver
                              </span>
                              <a
                                className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                href="#"
                              >
                                Shop Now
                              </a>
                            </div>
                          </article>
                          {/* End Article */}
                        </div>
                        <div className="col-md-4 g-mb-30 g-mb-0--md">
                          {/* Article */}
                          <article
                            className="g-bg-size-cover g-bg-pos-center g-bg-cover g-bg-bluegray-opacity-0_3--after text-center g-px-40 g-py-80"
                            data-bg-img-src="assets/img-temp/600x400/img3.jpg"
                          >
                            <div className="g-pos-rel g-z-index-1">
                              <span className="d-block g-color-white g-font-weight-400 text-uppercase mb-3">
                                Glasses
                              </span>
                              <span className="d-block h2 g-color-white mb-4">
                                RayBan
                              </span>
                              <a
                                className="btn u-btn-white g-brd-primary--hover g-color-white--hover g-bg-primary--hover g-font-size-11 text-uppercase g-py-10 g-px-20"
                                href="#"
                              >
                                Shop Now
                              </a>
                            </div>
                          </article>
                          {/* End Article */}
                        </div>
                      </div>
                    </div>
                    {/* End Mega Menu */}
                  </li>
                  {/* End New Arrivals - Mega Menu */}
                  <li className="nav-item g-mx-10--lg g-mx-15--xl">
                    <a
                      className="nav-link text-uppercase g-color-primary--hover g-px-5 g-py-20"
                      href="../index.html"
                    >
                      Main
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Navigation */}
            </div>
          </nav>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};
