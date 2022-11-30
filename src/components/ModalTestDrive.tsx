import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TestDriveParams } from "../interface";
import {
  getTestDriveUser,
  testdriveRequest,
} from "../redux/actions/testdriveActions";
import { TestDriveDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton, ReverseBlueGreenButton } from "../styles/Styled";

function ModalTestDrive() {
  var todayDate = new Date().toISOString().slice(0, 10);
  const [inputDate, setInputDate] = useState("");
  const { car } = useSelector((state: RootState) => state.carReducer);
  const { testDrivesUser } = useSelector(
    (state: RootState) => state.testdriveReducer
  );
  const { reqTestDrive, reqTestDriveError } = useSelector(
    (state: RootState) => state.testdriveReducer
  );

  const testdriveDispatch: TestDriveDispatch = useDispatch();
  const [isRequested, setIsRequested] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let formatInput = moment(inputDate).format();
  console.log("err msg",reqTestDriveError)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValidation(inputDate)) {
      const testdriveData: TestDriveParams = {
        car_id: car.CarID,
        date_request: formatInput,
      };
      testdriveDispatch(testdriveRequest(testdriveData));
      if (reqTestDrive == null) {
        setErrorMessage("");
        setAlertError(false);
        setAlertSuccess(true);
        return;
      }
      if (reqTestDriveError != null) {
        setAlertSuccess(false);
        setAlertError(true);
        setErrorMessage(reqTestDriveError);
        return;
      }
    }
  };

  useEffect(() => {
    testdriveDispatch(getTestDriveUser());
  }, [testdriveDispatch]);

  useEffect(() => {
    const requestedCar = testDrivesUser.find(
      (carTD) => carTD.car_id === car.CarID && carTD.status != "REJECTED"
    );
    setIsRequested(!!requestedCar);
  }, [car, testDrivesUser, alertError, errorMessage, alertSuccess]);

  const [inputErrors, setInputErrors] = useState(false);

  const inputValidation = (date: string) => {
    if (date === "") {
      setInputErrors(true);
    }
    return inputErrors;
  };

  return (
    <div
      className={`modal`}
      tabIndex={-1}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            {isRequested ? (
              <div className="alert alert-success" role="alert">
                You already request this car to test drive!
              </div>
            ) : (
              <>
                {alertSuccess && !inputErrors ? (
                  <div className="alert alert-success" role="alert">
                    Test drive requested!
                  </div>
                ) : (
                  <></>
                )}
                {alertError && !inputErrors ? (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                ) : (
                  <></>
                )}
                <div className="d-flex justify-content-center mt-4">
                  <h3>Request Test Drive</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="full_name"
                    className="form-label fw-bold mt-4"
                  >
                    Choose Date
                  </label>
                  <input
                    name="requested_date"
                    type="date"
                    className="form-control"
                    id="requested_date"
                    min={todayDate}
                    value={inputDate}
                    onChange={(e) => setInputDate(e.currentTarget.value)}
                  />
                  {inputErrors ? (
                    <span className="text-danger">This Field is Required</span>
                  ) : (
                    <></>
                  )}
                  <div className="d-flex justify-content-center mt-5 mb-3 gap-4">
                    <BlueGreenButton
                      type="submit"
                      disabled={isRequested ? true : false}
                    >
                      Request Test Drive
                    </BlueGreenButton>
                  </div>
                </form>
              </>
            )}
            <div className="d-flex justify-content-end">
              <ReverseBlueGreenButton data-bs-dismiss="modal">
                Close
              </ReverseBlueGreenButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTestDrive;
