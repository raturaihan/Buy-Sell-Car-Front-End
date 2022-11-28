import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCar } from "../../redux/actions/carActions";
import { CarDispatch, TransactionDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import { FormatBalance } from "../../utils/utils";
import {
  BlueGreenButton,
  FormContainer,
  ReverseBlueGreenButton,
  SmallFont,
} from "../../styles/Styled";
import ModalSuccess from "../../components/ModalSuccess";
import { PaymentParams } from "../../interface";
import { doPayment } from "../../redux/actions/transactionActions";

function CheckoutPage() {
  const { car } = useSelector((state: RootState) => state.carReducer);
  const [isInstallment, setIsInstallment] = useState(false);
  const [calculator, setCalculator] = useState({
    dp: 0.1,
    year: "5",
  });
  const [modal, setModal] = useState(false);
  const transactionDispatch: TransactionDispatch = useDispatch();
  const downPayment = () => {
    return calculator.dp * car.price;
  };

  const finalAmountInstallment = () => {
    let price = car.price - downPayment();
    let tax = price * 0.11;
    let finalAmount = tax + price;
    return finalAmount;
  };

  const perMonthAmount = () => {
    let perMonth = finalAmountInstallment() / (parseInt(calculator.year) * 12);
    return Math.round(perMonth);
  };

  const finalAmountModal = () => {
    if (isInstallment) {
      return `Please Pay Rp ${FormatBalance(downPayment())}`
    }
    return `Please Pay Rp ${FormatBalance(car.price)}`
  }

  const finalAmount = () => {
    if (isInstallment) {
      return finalAmountInstallment()
    }
    return car.price
  }

  const transType = () => {
    if (isInstallment) {
      return "INSTALLMENT"
    }
    return "CASH"
  }


  const handleClick = () => {
    setModal(true)
    const transactionData: PaymentParams = {
      car_id: car.CarID,
      final_amount: finalAmount(),
      trans_type: transType()
    };
    transactionDispatch(doPayment(transactionData))
  }
  return (
    <div>
      {car.car_name ? (
        <div className="container">
          <div className="d-flex justify-content-center m-5">
            <FormContainer className="card mt-5 p-4">
              <div className="card-body">
                <h1 className="text-center mt-4">Checkout</h1>
                <div className="row mt-5">
                  <img
                    src={car.car_img}
                    alt={car.car_name}
                    className="rounded-5"
                  />
                  <h5 className="mt-3 ms-3">
                    {car.car_year} {car.car_name}
                  </h5>
                  <p className="ms-3">
                    {car.transmission_type} | {car.color} | {car.car_year}
                  </p>
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
                    placeholder={FormatBalance(car.price)}
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
                      <label htmlFor="dp" className="fw-bold">
                        Down Payment
                      </label>
                      <div className="col-lg-10">
                        <input
                          type="number"
                          className="form-control"
                          aria-label="Text input with dropdown button"
                          disabled
                          placeholder={FormatBalance(downPayment())}
                        />
                      </div>
                      <div className="col-lg-2">
                        <select
                          name="dp"
                          id="dp"
                          className="form-select"
                          onChange={(e) => {
                            setCalculator({
                              dp: parseFloat(e.target.value),
                              year: calculator.year,
                            });
                          }}
                        >
                          <option value={0.1}>10%</option>
                          <option value={0.2}>20%</option>
                          <option value={0.3}>30%</option>
                          <option value={0.4}>40%</option>
                          <option value={0.5}>50%</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Installment Tenor</p>
                        <p className="fw-bold">Fix Rate: 11%</p>
                      </div>
                      <p className="text-center fw-bold">
                        {calculator.year} Years
                      </p>
                      <div className="d-flex justify-content-center">
                        <input
                          type="range"
                          className="form-range"
                          min="1"
                          max="5"
                          step="1"
                          onChange={(e) =>
                            setCalculator({
                              year: e.target.value,
                              dp: calculator.dp,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <p className="text-center">
                        Your Estimated Monthly Payment
                      </p>
                      <h4 className="text-center text-danger">
                        Rp {FormatBalance(perMonthAmount())} /month
                      </h4>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <div className="row mt-4">
                  <div className="col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon Code"
                    />
                  </div>
                  <div className="col-lg-4">
                    <ReverseBlueGreenButton className="px-5 py-auto">
                      Apply
                    </ReverseBlueGreenButton>
                  </div>
                </div>
                <div className="row my-5">
                  <BlueGreenButton
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={handleClick}
                  >
                    Proceed to Payment
                  </BlueGreenButton>
                  <ModalSuccess 
                    modalType="Checkout Success!"
                    buttonModal="Done"
                    pathTarget="/home"
                    message={finalAmountModal()}
                    show={modal}
                    isPayment={true}/>
                </div>
              </div>
            </FormContainer>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CheckoutPage;
