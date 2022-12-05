import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TestDriveParams } from "../interface";
import {
  getTestDriveUser,
  resetTestDrive,
  testdriveRequest,
} from "../redux/actions/testdriveActions";
import { TestDriveDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton, ReverseBlueGreenButton } from "../styles/Styled";
import Alert from "./Alert";


function ModalTestDrive() {
  var todayDate = new Date().toISOString().slice(0, 10);
  const [inputDate, setInputDate] = useState("");
  const { car } = useSelector((state: RootState) => state.carReducer);
  const { testDrivesUser, reqTestDrive, reqTestDriveError } = useSelector(
    (state: RootState) => state.testdriveReducer
  );
  const testdriveDispatch: TestDriveDispatch = useDispatch();
  const [isRequested, setIsRequested] = useState(false);
  const [alert, setAlert] = useState(false);

  let formatInput = moment(inputDate).format();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputValidation(formatInput)) {
      const testdriveData: TestDriveParams = {
        car_id: car.car_id,
        date_request: formatInput,
      };
      testdriveDispatch(testdriveRequest(testdriveData));
      setAlert(true);
    }
  };

  const handleCloseModal = () => {
    setAlert(false)
    setInputDate("")
    testdriveDispatch(resetTestDrive());
  }

  useEffect(() => {
    testdriveDispatch(getTestDriveUser());
  }, [testdriveDispatch, reqTestDriveError]);

  useEffect(() => {
    const requestedCar = testDrivesUser.find(
      (carTD) => carTD.car_id === car.car_id && carTD.status != "REJECTED"
    );
    setIsRequested(!!requestedCar);
  }, [car, testDrivesUser]);

  const [inputErrors, setInputErrors] = useState({
    date: false
  });
  console.log(inputErrors)
  const inputValidation = (date: string) => {
    let errorState = {
      date: false
    }
    let errorFlag = false
    if (date === "Invalid date") {
      errorState ={...errorState, date: true}
      errorFlag = true;
    }
    setInputErrors(errorState)
    return errorFlag;
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
                {alert ? (
                  <>
                    {reqTestDriveError == "" ? (
                      <Alert
                        show={alert}
                        message={
                          "You successfully request this car to test drive!"
                        }
                        type={"success"}
                      />
                    ) : (
                      <Alert
                        show={alert}
                        message={reqTestDriveError}
                        type={"danger"}
                      />
                    )}
                  </>
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
                  {inputErrors.date ? (
                    <span className="text-danger">This Field is Required</span>
                  ) : (
                    <></>
                  )}
                  <div className="d-flex justify-content-center mt-5 mb-3 gap-4">
                    <BlueGreenButton
                      type="submit"
                      id="liveAlertBtn"
                      disabled={isRequested ? true : false}
                    >
                      Request Test Drive
                    </BlueGreenButton>
                  </div>
                </form>
              </>
            )}
            <div className="d-flex justify-content-end">
              <ReverseBlueGreenButton data-bs-dismiss="modal" onClick={handleCloseModal}>
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
