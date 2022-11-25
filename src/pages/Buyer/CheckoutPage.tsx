import React, { useState } from "react";
import { BlueGreenButton, FormContainer } from "../../styles/Styled";

function CheckoutPage() {
  const [isInstallment, setIsInstallment] = useState(false);
  const [yearValue, setYearValue] = useState("");
  return (
    <div>
      <div className="container">
        <div className="row m-5">
          <div className="d-flex justify-content-center m-5">
            <FormContainer className="card mt-5 p-4">
              <div className="card-body">
                <h3 className="text-center mt-4">Checkout</h3>
                <div className="row mt-5">
                  <img
                    src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1669347769/Car%20Image/bdba5ace-4a0d-4384-aeba-e86aa32ab0ef_tt6qmv.webp"
                    alt=""
                    className="rounded-5"
                  />
                  <h5 className="mt-3 ms-3">2018 Honda Jazz RC 1.5</h5>
                  <p className="ms-3">Automatic | White | 2018</p>
                </div>
                <div className="row">
                  <label htmlFor="price" className="fw-bold">
                    Car Price
                  </label>
                  <input
                    name="price"
                    type="price"
                    id="price"
                    className="form-control"
                    placeholder="Rp 193.000.000"
                    disabled
                  />
                </div>
                <div className="row mt-4">
                  <label htmlFor="price" className="fw-bold">
                    Transactions Type:
                  </label>
                  <div className="col">
                    <input
                      type="radio"
                      id="cash"
                      name="trans_type"
                      value="cash"
                      onChange={(e) => setIsInstallment(false)}
                    />
                    <label htmlFor="CASH" className="ms-3">
                      CASH
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="radio"
                      id="installment"
                      name="trans_type"
                      value="installment"
                      onChange={(e) => setIsInstallment(true)}
                    />
                    <label htmlFor="INSTALLMENT" className="ms-3">
                      INSTALLMENT
                    </label>
                  </div>
                </div>
                {isInstallment ? (
                  <>
                    <div className="row mt-4">
                      <label htmlFor="price" className="fw-bold">
                        Down Payment
                      </label>
                      <input
                        name="price"
                        type="number"
                        id="price"
                        className="form-control"
                      />
                    </div>
                    <div className="row mt-4">
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Installment Tenor</p>
                        <p>Fix Rate: 11%</p>
                      </div>
                        <p className="text-center fw-bold">{yearValue} Years</p>
                      <div className="d-flex justify-content-center">
                        <input
                          type="range"
                          className="form-range"
                          min="1"
                          max="5"
                          step="1"
                          onChange={(e) => setYearValue(e.currentTarget.value)}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <p className="text-center">
                        Your Estimated Monthly Payment
                      </p>
                      <h4 className="text-center text-danger">Rp 13.933.333</h4>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="row mt-4">
                  <div className="d-flex justify-content-between">
                    <p>Final Amount</p>
                    <p>Rp 150.000.000</p>
                  </div>
                </div>
                <div className="row">
                  <BlueGreenButton>Proceed to Payment</BlueGreenButton>
                </div>
              </div>
            </FormContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
