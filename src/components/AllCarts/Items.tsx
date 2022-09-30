import { useEffect, useRef, useState } from "react";
import { AllCarts } from "../../database/items";
import { useAppSelector } from "../../app/hooks";
import { Cart } from "../Cart/Cart";
import { selectCart } from "../../features/Cart/cartSlice";
import { EmptyCart } from "../EmptyCart/EmptyCart";

export const Items = () => {
  const [OneActive, setOneActive] = useState<string>("active");
  const [TwoActive, setTwoActive] = useState<string>("");
  const [ThreeActive, setThreeActive] = useState<string>("");

  const stepOne = useRef<HTMLDivElement | null>(null);
  const stepTwo = useRef<HTMLDivElement | null>(null);
  const stepThree = useRef<HTMLDivElement | null>(null);

  const { cartItems } = useAppSelector(selectCart);


  const jumpFirst = () => {
    stepOne.current?.classList.remove("active");
    stepTwo.current?.classList.add("active");

    setOneActive("g-checked");

    setTwoActive("active");

    if (stepOne.current) {
      stepOne.current.style.display = "none";
    }

    if (stepTwo.current) {
      stepTwo.current.style.display = "block";
    }

    if (stepThree.current) {
      stepThree.current.style.display = "none";
    }
  };

  const jumpSecond = () => {
    stepOne.current?.classList.remove("active");
    stepTwo.current?.classList.add("active");

    setOneActive("g-checked");

    setTwoActive("g-checked");

    setThreeActive('active')

    if (stepOne.current) {
      stepOne.current.style.display = "none";
    }

    if (stepTwo.current) {
      stepTwo.current.style.display = "none";
    }

    if (stepThree.current) {
      stepThree.current.style.display = "block";
    }
  };

  useEffect(() => {
    const initRender = () => {
      stepOne.current?.classList.add("active");
      // stepTwo.current?.classList.add('active');
      if (stepTwo.current) {
        stepTwo.current.style.display = "none";
      }

      if (stepThree.current) {
        stepThree.current.style.display = "none";
      }
    };

    initRender();
  }, []);

  return (
    <>

    {cartItems.length < 1 ? <EmptyCart /> : 
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
                <span>Checkout</span>
              </li>
            </ul>
          </div>
        </section>
        {/* End Breadcrumbs */}
        {/* Checkout Form */}
        <div className="container g-pt-100 g-pb-70">
          <form
            className="js-validate js-step-form"
            data-progress-id="#stepFormProgress"
            data-steps-id="#stepFormSteps"
          >
            <div className="g-mb-100">
              {/* Step Titles */}
              <ul
                id="stepFormProgress"
                className="js-step-progress row justify-content-center list-inline text-center g-font-size-17 mb-0"
              >
                <li
                  className={`col-3 list-inline-item g-mb-20 g-mb-0--sm ${OneActive}`}
                >
                  <span className="d-block u-icon-v2 u-icon-size--sm g-rounded-50x g-brd-primary g-color-primary g-color-white--parent-active g-bg-primary--active g-color-white--checked g-bg-primary--checked mx-auto mb-3">
                    <i className="g-font-style-normal g-font-weight-700 g-hide-check">
                      1
                    </i>
                    <i className="fa fa-check g-show-check" />
                  </span>
                  <h4 className="g-font-size-16 text-uppercase mb-0">
                    Shopping Cart
                  </h4>
                </li>
                <li
                  className={`col-3 list-inline-item g-mb-20 g-mb-0--sm ${TwoActive}`}
                >
                  <span className="d-block u-icon-v2 u-icon-size--sm g-rounded-50x g-brd-gray-light-v2 g-color-gray-dark-v5 g-brd-primary--active g-color-white--parent-active g-bg-primary--active g-color-white--checked g-bg-primary--checked mx-auto mb-3">
                    <i className="g-font-style-normal g-font-weight-700 g-hide-check">
                      2
                    </i>
                    <i className="fa fa-check g-show-check" />
                  </span>
                  <h4 className="g-font-size-16 text-uppercase mb-0">
                    Shipping
                  </h4>
                </li>
                <li className={`col-3 list-inline-item ${ThreeActive}`}>
                  <span className="d-block u-icon-v2 u-icon-size--sm g-rounded-50x g-brd-gray-light-v2 g-color-gray-dark-v5 g-brd-primary--active g-color-white--parent-active g-bg-primary--active g-color-white--checked g-bg-primary--checked mx-auto mb-3">
                    <i className="g-font-style-normal g-font-weight-700 g-hide-check">
                      3
                    </i>
                    <i className="fa fa-check g-show-check" />
                  </span>
                  <h4 className="g-font-size-16 text-uppercase mb-0">
                    Payment &amp; Review
                  </h4>
                </li>
              </ul>
              {/* End Step Titles */}
            </div>
            <div id="stepFormSteps">
              {/* Shopping Cart */}
              <div id="step1" className={`${OneActive}`} ref={stepOne}>
                <div className="row">
                  <div className="col-md-8 g-mb-30">
                    {/* Products Block */}
                    <div className="g-overflow-x-scroll g-overflow-x-visible--lg">
                      <table className="text-center w-100">
                        <thead className="h6 g-brd-bottom g-brd-gray-light-v3 g-color-black text-uppercase">
                          <tr>
                            <th className="g-font-weight-400 text-left g-pb-20">
                              Product
                            </th>
                            <th className="g-font-weight-400 g-width-130 g-pb-20">
                              Price
                            </th>
                            <th className="g-font-weight-400 g-width-50 g-pb-20">
                              Qty
                            </th>
                            <th className="g-font-weight-400 g-width-130 g-pb-20">
                              Total
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>

                          {
                            cartItems.map((cart) => (
                              <Cart key={cart.id} cart={cart}/>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                    {/* End Products Block */}
                  </div>
                  <div className="col-md-4 g-mb-30">
                    {/* Summary */}
                    <div className="g-bg-gray-light-v5 g-pa-20 g-pb-50 mb-4">
                      <h4 className="h6 text-uppercase mb-3">Summary</h4>
                      {/* Accordion */}
                      <div
                        id="accordion-01"
                        className="mb-4"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div
                          id="accordion-01-heading-01"
                          className="g-brd-y g-brd-gray-light-v2 py-3"
                          role="tab"
                        >
                          <h5 className="g-font-weight-400 g-font-size-default mb-0">
                            <a
                              className="g-color-gray-dark-v4 g-text-underline--none--hover"
                              href="#accordion-01-body-01"
                              data-toggle="collapse"
                              data-parent="#accordion-01"
                              aria-expanded="false"
                              aria-controls="accordion-01-body-01"
                            >
                              Estimate shipping
                              <span className="ml-3 fa fa-angle-down" />
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
                            <div className="mb-3">
                              <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                                Country
                              </label>
                              <input
                                id="inputGroup1"
                                className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                                name="country"
                                type="text"
                                placeholder="United Kingdom"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                                State/Province
                              </label>
                              <input
                                id="inputGroup2"
                                className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                                name="stateProvince"
                                type="text"
                                placeholder="London"
                                required
                              />
                            </div>
                            <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                              ZIP/Postal Code
                            </label>
                            <input
                              id="inputGroup3"
                              className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                              name="zip"
                              type="text"
                              placeholder="e.g. AB123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Accordion */}
                      <div className="d-flex justify-content-between mb-2">
                        <span className="g-color-black">Subtotal</span>
                        <span className="g-color-black g-font-weight-300">
                          $454.00
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="g-color-black">Order Total</span>
                        <span className="g-color-black g-font-weight-300">
                          $454.00
                        </span>
                      </div>
                    </div>
                    {/* End Summary */}
                    <button
                      className="btn btn-block u-btn-outline-black g-brd-gray-light-v1 g-bg-black--hover g-font-size-13 text-uppercase g-py-15 mb-4"
                      type="button"
                    >
                      Update Shopping Cart
                    </button>
                    <button
                      className="btn btn-block u-btn-primary g-font-size-13 text-uppercase g-py-15 mb-4"
                      type="button"
                      data-next-step="#step2"
                      onClick={jumpFirst}
                    >
                      Proceed to Checkout
                    </button>
                    <a
                      className="d-inline-block g-color-black g-color-primary--hover g-text-underline--none--hover mb-3"
                      href="#"
                    >
                      <i className="mr-2 fa fa-info-circle" />
                      Delivery
                    </a>
                    {/* Accordion */}
                    <div
                      id="accordion-02"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div id="accordion-02-heading-02" role="tab">
                        <h5 className="g-font-weight-400 g-font-size-default mb-0">
                          <a
                            className="g-color-black g-text-underline--none--hover"
                            href="#accordion-02-body-02"
                            data-toggle="collapse"
                            data-parent="#accordion-02"
                            aria-expanded="false"
                            aria-controls="accordion-02-body-02"
                          >
                            Apply discount code
                            <span className="ml-3 fa fa-angle-down" />
                          </a>
                        </h5>
                      </div>
                      <div
                        id="accordion-02-body-02"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="accordion-02-heading-02"
                      >
                        <div className="input-group rounded g-pt-15">
                          <input
                            className="form-control g-brd-gray-light-v1 g-brd-right-none g-color-gray-dark-v3 g-placeholder-gray-dark-v3"
                            type="text"
                            placeholder="Enter discount code"
                          />
                          <span className="input-group-append g-brd-gray-light-v1 g-bg-white">
                            <button className="btn u-btn-primary" type="submit">
                              Apply
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* End Accordion */}
                  </div>
                </div>
              </div>
              {/* End Shopping Cart */}
              {/* Shipping */}
              <div id="step2" ref={stepTwo}>
                <div className="row">
                  <div className="col-md-8 g-mb-30">
                    <div className="row">
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            First Name
                          </label>
                          <input
                            id="inputGroup4"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="firstName"
                            type="text"
                            placeholder="Alexander"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Last Name
                          </label>
                          <input
                            id="inputGroup5"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="lastName"
                            type="text"
                            placeholder="Teseira"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Email Address
                          </label>
                          <input
                            id="inputGroup6"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="email"
                            type="email"
                            placeholder="alex@gmail.com"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Company
                          </label>
                          <input
                            id="inputGroup7"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="company"
                            type="text"
                            placeholder="Pixeel Ltd."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            State/Province
                          </label>
                          <input
                            id="inputGroup8"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="stateProvince"
                            type="text"
                            placeholder="London"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Zip/Postal Code
                          </label>
                          <input
                            id="inputGroup9"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="zip"
                            type="text"
                            placeholder="AB123"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Country
                          </label>
                          <select
                            className="js-custom-select u-select-v1 g-brd-gray-light-v2 g-color-gray-light-v1 g-py-12"
                            style={{ width: "100%" }}
                            data-placeholder="Choose your Country"
                            data-open-icon="fa fa-angle-down"
                            data-close-icon="fa fa-angle-up"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          >
                            <option />
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">
                              Bolivia, Plurinational State of
                            </option>
                            <option value="BQ">
                              Bonaire, Sint Eustatius and Saba
                            </option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">
                              British Indian Ocean Territory
                            </option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                              Congo, the Democratic Republic of the
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">
                              French Southern Territories
                            </option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">
                              Heard Island and McDonald Islands
                            </option>
                            <option value="VA">
                              Holy See (Vatican City State)
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran, Islamic Republic of
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">
                              Lao People's Democratic Republic
                            </option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">
                              Macedonia, the former Yugoslav Republic of
                            </option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">
                              Micronesia, Federated States of
                            </option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="BL">Saint Barthélemy</option>
                            <option value="SH">
                              Saint Helena, Ascension and Tristan da Cunha
                            </option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="MF">
                              Saint Martin (French part)
                            </option>
                            <option value="PM">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="VC">
                              Saint Vincent and the Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SX">
                              Sint Maarten (Dutch part)
                            </option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                              South Georgia and the South Sandwich Islands
                            </option>
                            <option value="SS">South Sudan</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-Leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">
                              Venezuela, Bolivarian Republic of
                            </option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6 g-mb-20">
                        <div className="form-group">
                          <label className="d-block g-color-gray-dark-v2 g-font-size-13">
                            Phone Number
                          </label>
                          <input
                            id="inputGroup10"
                            className="form-control u-form-control g-placeholder-gray-light-v1 rounded-0 g-py-15"
                            name="phoneNumber"
                            type="text"
                            placeholder="+01 (00) 555 666 77"
                            required
                            data-msg="This field is mandatory"
                            data-error-class="u-has-error-v1"
                            data-success-class="u-has-success-v1"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="g-mb-50" />
                    <h4 className="h6 text-uppercase mb-5">Shipping method</h4>
                    {/* Shipping Mehtod */}
                    <table className="mb-5">
                      <thead className="h6 g-brd-bottom g-brd-gray-light-v3 g-color-gray-dark-v3 g-font-size-13">
                        <tr>
                          <th className="g-width-70 g-font-weight-500 g-pa-0 g-pb-10">
                            Destination
                          </th>
                          <th className="g-width-110 g-font-weight-500 g-pa-0 g-pb-10">
                            Delivery type
                          </th>
                          <th className="g-width-150 g-font-weight-500 g-pa-0 g-pb-10">
                            Delivery time
                          </th>
                          <th className="g-width-70 g-font-weight-500 text-right g-pa-0 g-pb-10">
                            Cost
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="g-color-gray-dark-v4 g-font-size-13">
                          <td className="align-top g-py-10">UK</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-py-10">
                            2-3 Working days
                          </td>
                          <td className="align-top text-right g-py-10">$5.5</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-13">
                          <td className="align-top g-py-10" />
                          <td className="align-top g-py-10">Next day</td>
                          <td className="align-top g-py-10">
                            Order before 12pm monday - thursday and receive it
                            the next day
                          </td>
                          <td className="align-top text-right g-py-10">$9.5</td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-13">
                          <td className="align-top g-py-10" />
                          <td className="align-top g-py-10">
                            Saturday delivery
                          </td>
                          <td className="align-top g-py-10">
                            Saturday delivery for orders placed before 12pm on
                            friday
                          </td>
                          <td className="align-top text-right g-py-10">
                            $12.00
                          </td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-13">
                          <td className="align-top g-py-10">Europe</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-py-10">
                            3-9 Working days
                          </td>
                          <td className="align-top text-right g-py-10">
                            $20.00
                          </td>
                        </tr>
                        <tr className="g-color-gray-dark-v4 g-font-size-13">
                          <td className="align-top g-py-10">America</td>
                          <td className="align-top g-py-10">
                            Standard delivery
                          </td>
                          <td className="align-top g-py-10">
                            3-9 Working days
                          </td>
                          <td className="align-top text-right g-py-10">
                            $25.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Shipping Mehtod */}
                    <button
                      className="btn u-btn-primary g-font-size-13 text-uppercase g-px-40 g-py-15"
                      type="button"
                      data-next-step="#step3"
                      onClick={jumpSecond}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                  <div className="col-md-4 g-mb-30">
                    {/* Order Summary */}
                    <div className="g-bg-gray-light-v5 g-pa-20 g-pb-50 mb-4">
                      <h4 className="h6 text-uppercase mb-3">Order summary</h4>
                      {/* Accordion */}
                      <div
                        id="accordion-03"
                        className="mb-4"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div
                          id="accordion-03-heading-03"
                          className="g-brd-y g-brd-gray-light-v2 py-3"
                          role="tab"
                        >
                          <h5 className="g-font-weight-400 g-font-size-default mb-0">
                            <a
                              className="g-color-gray-dark-v4 g-text-underline--none--hover"
                              href="#accordion-03-body-03"
                              data-toggle="collapse"
                              data-parent="#accordion-03"
                              aria-expanded="false"
                              aria-controls="accordion-03-body-03"
                            >
                              3 items in cart
                              <span className="ml-3 fa fa-angle-down" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="accordion-03-body-03"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="accordion-03-heading-03"
                        >
                          <div className="g-py-15">
                            <ul className="list-unstyled mb-3">
                              {/* Product */}
                              <li className="d-flex justify-content-start">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img6.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">Sneaker</h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Black</li>
                                    <li>Size: MD</li>
                                    <li>QTY: 1</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 87.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                              {/* Product */}
                              <li className="d-flex justify-content-start g-brd-top g-brd-gray-light-v3 pt-4 mt-4">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img3.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">
                                    Chukka Shoes
                                  </h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Black</li>
                                    <li>Size: MD</li>
                                    <li>QTY: 2</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 160.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                              {/* Product */}
                              <li className="d-flex justify-content-start g-brd-top g-brd-gray-light-v3 pt-4 mt-4">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img7.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">
                                    Desk Clock
                                  </h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Brown Wood</li>
                                    <li>Type: Desk</li>
                                    <li>QTY: 1</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 47.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Accordion */}
                      <div className="d-flex justify-content-between mb-2">
                        <span className="g-color-black">Subtotal</span>
                        <span className="g-color-black g-font-weight-300">
                          $454.00
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="g-color-black">Order Total</span>
                        <span className="g-color-black g-font-weight-300">
                          $459.5
                        </span>
                      </div>
                    </div>
                    {/* End Order Summary */}
                  </div>
                </div>
              </div>
              {/* End Shipping */}
              {/* Payment & Review */}
              <div id="step3" ref={stepThree}>
                <div className="row">
                  <div className="col-md-8 g-mb-30">
                    {/* Payment Methods */}
                    <ul className="list-unstyled mb-5">
                      <li className="g-brd-bottom g-brd-gray-light-v3 pb-3 my-3">
                        <label className="form-check-inline u-check d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover g-pl-30">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline1_1"
                            type="radio"
                          />
                          <span className="d-block u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                            <i className="fa" data-check-icon="" />
                          </span>
                          Pay with
                          <img
                            className="g-width-70 ml-2"
                            src="assets/img-temp/200x55/img1.jpg"
                            alt="Image Description"
                          />
                        </label>
                      </li>
                      <li className="my-3">
                        <label className="form-check-inline u-check d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover g-pl-30">
                          <input
                            className="g-hidden-xs-up g-pos-abs g-top-0 g-left-0"
                            name="radInline1_1"
                            type="radio"
                            defaultChecked
                          />
                          <span className="d-block u-check-icon-checkbox-v4 g-absolute-centered--y g-left-0">
                            <i className="fa" data-check-icon="" />
                          </span>
                          Pay with Credit Card
                          <img
                            className="g-width-50 ml-2"
                            src="assets/img-temp/200x55/img2.jpg"
                            alt="Image Description"
                          />
                        </label>
                      </li>
                    </ul>
                    {/* End Payment Methods */}
                    {/* Alert */}
                    <div
                      className="alert g-brd-around g-brd-gray-dark-v5 rounded-0 g-pa-0 mb-4"
                      role="alert"
                    >
                      <div className="media">
                        <div className="d-flex g-brd-right g-brd-gray-dark-v5 g-pa-15">
                          <span className="u-icon-v1 u-icon-size--xs g-color-black">
                            <i className="align-middle icon-media-065 u-line-icon-pro" />
                          </span>
                        </div>
                        <div className="media-body g-pa-15">
                          <p className="g-color-black m-0">
                            My billing and shipping address are the correct
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Alert */}
                    {/* Shipping Details */}
                    <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-15 g-pl-70 mb-5">
                      <li className="g-my-3">Chester Ryan</li>
                      <li className="g-my-3">chester@gmail.com</li>
                      <li className="g-my-3">51 Hailee Park</li>
                      <li className="g-my-3">New York, NY, 10013</li>
                      <li className="g-my-3">AB123</li>
                      <li className="g-my-3">United States</li>
                      <li className="g-my-3">+01 731 878 77</li>
                    </ul>
                    {/* End Shipping Details */}
                    <div className="g-brd-bottom g-brd-gray-light-v3 g-pb-30 g-mb-30">
                      <div className="text-right">
                        <button
                          className="btn u-btn-primary g-font-size-13 text-uppercase g-px-40 g-py-15"
                          type="button"
                        >
                          Make Payment
                        </button>
                      </div>
                    </div>
                    {/* Accordion */}
                    <div
                      id="accordion-04"
                      className="g-max-width-300"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div id="accordion-04-heading-04" role="tab">
                        <h5 className="h6 text-uppercase mb-0">
                          <a
                            className="g-color-black g-text-underline--none--hover"
                            href="#accordion-04-body-04"
                            data-toggle="collapse"
                            data-parent="#accordion-04"
                            aria-expanded="false"
                            aria-controls="accordion-04-body-04"
                          >
                            Apply discount code
                            <span className="ml-3 fa fa-angle-down" />
                          </a>
                        </h5>
                      </div>
                      <div
                        id="accordion-04-body-04"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="accordion-04-heading-04"
                      >
                        <div className="input-group rounded g-pt-15">
                          <input
                            className="form-control g-brd-gray-light-v1 g-brd-right-none g-color-gray-dark-v3 g-placeholder-gray-dark-v3"
                            type="email"
                            placeholder="Enter discount code"
                          />
                          <span className="input-group-append g-brd-gray-light-v1 g-bg-white">
                            <button className="btn u-btn-primary" type="submit">
                              Apply
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* End Accordion */}
                  </div>
                  <div className="col-md-4 g-mb-30">
                    {/* Order Summary */}
                    <div className="g-bg-gray-light-v5 g-pa-20 g-pb-50 mb-4">
                      <div className="g-brd-bottom g-brd-gray-light-v3 g-mb-15">
                        <h4 className="h6 text-uppercase mb-3">
                          Order summary
                        </h4>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span className="g-color-black">Cart Subtotal</span>
                        <span className="g-color-black g-font-weight-300">
                          $454.00
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="g-color-black">Shipping</span>
                          <span className="g-color-black g-font-weight-300">
                            $5.5
                          </span>
                        </div>
                        <p className="g-font-size-13">
                          UK Standard Delivery - 2-3 Working Days
                        </p>
                      </div>
                      <div className="d-flex justify-content-between mb-3">
                        <span className="g-color-black">Order Total</span>
                        <span className="g-color-black g-font-weight-300">
                          $459.5
                        </span>
                      </div>
                      {/* Accordion */}
                      <div
                        id="accordion-05"
                        className="mb-4"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div
                          id="accordion-05-heading-05"
                          className="g-brd-y g-brd-gray-light-v2 py-3"
                          role="tab"
                        >
                          <h5 className="g-font-weight-400 g-font-size-default mb-0">
                            <a
                              className="g-color-gray-dark-v4 g-text-underline--none--hover"
                              href="#accordion-05-body-05"
                              data-toggle="collapse"
                              data-parent="#accordion-05"
                              aria-expanded="false"
                              aria-controls="accordion-05-body-05"
                            >
                              3 items in cart
                              <span className="ml-3 fa fa-angle-down" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="accordion-05-body-05"
                          className="collapse"
                          role="tabpanel"
                          aria-labelledby="accordion-05-heading-05"
                        >
                          <div className="g-py-15">
                            <ul className="list-unstyled mb-3">
                              {/* Product */}
                              <li className="d-flex justify-content-start">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img6.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">Sneaker</h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Black</li>
                                    <li>Size: MD</li>
                                    <li>QTY: 1</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 87.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                              {/* Product */}
                              <li className="d-flex justify-content-start g-brd-top g-brd-gray-light-v3 pt-4 mt-4">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img3.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">
                                    Chukka Shoes
                                  </h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Black</li>
                                    <li>Size: MD</li>
                                    <li>QTY: 2</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 160.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                              {/* Product */}
                              <li className="d-flex justify-content-start g-brd-top g-brd-gray-light-v3 pt-4 mt-4">
                                <img
                                  className="g-width-100 g-height-100 mr-3"
                                  src="assets/img-temp/150x150/img7.jpg"
                                  alt="Image Description"
                                />
                                <div className="d-block">
                                  <h4 className="h6 g-color-black">
                                    Desk Clock
                                  </h4>
                                  <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-12 g-line-height-1_4 mb-1">
                                    <li>Color: Brown Wood</li>
                                    <li>Type: Desk</li>
                                    <li>QTY: 1</li>
                                  </ul>
                                  <span className="d-block g-color-black g-font-weight-400">
                                    $ 47.00
                                  </span>
                                </div>
                              </li>
                              {/* End Product */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* End Accordion */}
                    </div>
                    {/* End Order Summary */}
                    {/* Ship To */}
                    <div className="g-px-20 mb-5">
                      <div className="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v3 g-mb-15">
                        <h4 className="h6 text-uppercase mb-3">Ship to</h4>
                        <span className="g-color-gray-dark-v4 g-color-black--hover g-cursor-pointer">
                          <i className="fa fa-pencil" />
                        </span>
                      </div>
                      <ul className="list-unstyled g-color-gray-dark-v4 g-font-size-15">
                        <li className="g-my-3">Chester Ryan</li>
                        <li className="g-my-3">chester@gmail.com</li>
                        <li className="g-my-3">51 Hailee Park</li>
                        <li className="g-my-3">New York, NY, 10013</li>
                        <li className="g-my-3">AB123</li>
                        <li className="g-my-3">United States</li>
                        <li className="g-my-3">+01 731 878 77</li>
                      </ul>
                    </div>
                    {/* End Ship To */}
                    {/* Shipping Method */}
                    <div className="g-px-20 mb-5">
                      <div className="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v3 g-mb-15">
                        <h4 className="h6 text-uppercase mb-3">
                          Shipping Method
                        </h4>
                        <span className="g-color-gray-dark-v4 g-color-black--hover g-cursor-pointer">
                          <i className="fa fa-pencil" />
                        </span>
                      </div>
                      <p className="g-color-gray-dark-v4 g-font-size-15">
                        UK Standard Delivery - 2-3 Working Days
                      </p>
                    </div>
                    {/* End Shipping Method */}
                  </div>
                </div>
              </div>
              {/* End Payment & Review */}
            </div>
          </form>
        </div>
        {/* End Checkout Form */}
        {/* Call to Action */}
        <div className="g-bg-primary">
          <div className="container g-py-20">
            <div className="row justify-content-center">
              <div className="col-md-4 mx-auto g-py-20">
                {/* Media */}
                <div className="media g-px-50--lg">
                  <i className="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-real-estate-048 u-line-icon-pro" />
                  <div className="media-body">
                    <span className="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">
                      Free Shipping
                    </span>
                    <span className="d-block g-color-white-opacity-0_8">
                      In 2-3 Days
                    </span>
                  </div>
                </div>
                {/* End Media */}
              </div>
              <div className="col-md-4 mx-auto g-brd-x--md g-brd-white-opacity-0_3 g-py-20">
                {/* Media */}
                <div className="media g-px-50--lg">
                  <i className="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-real-estate-040 u-line-icon-pro" />
                  <div className="media-body">
                    <span className="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">
                      Free Returns
                    </span>
                    <span className="d-block g-color-white-opacity-0_8">
                      No Questions Asked
                    </span>
                  </div>
                </div>
                {/* End Media */}
              </div>
              <div className="col-md-4 mx-auto g-py-20">
                {/* Media */}
                <div className="media g-px-50--lg">
                  <i className="d-flex g-color-white g-font-size-40 g-pos-rel g-top-3 mr-4 icon-hotel-restaurant-062 u-line-icon-pro" />
                  <div className="media-body text-left">
                    <span className="d-block g-color-white g-font-weight-500 g-font-size-17 text-uppercase">
                      Free 24
                    </span>
                    <span className="d-block g-color-white-opacity-0_8">
                      Days Storage
                    </span>
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
          </div>
        </div>
        {/* End Call to Action */}
      </div>
}
    </>
  );
};
