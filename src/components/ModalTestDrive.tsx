import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITestDrive, TestDriveParams } from "../interface";
import { testdriveRequest } from "../redux/actions/testdriveActions";
import { TestDriveDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton, ReverseBlueGreenButton } from "../styles/Styled";

function ModalTestDrive() {
  const [inputDate, setInputDate] = useState("");
  const { car } = useSelector((state: RootState) => state.carReducer);
  const { reqTestDrive, reqTestDriveError } = useSelector(
    (state: RootState) => state.testdriveReducer
  );
  const testdriveDispatch: TestDriveDispatch = useDispatch();
  const [isRequested, setIsRequested] = useState(false);
  console.log(isRequested)
  let formatInput = moment(inputDate).format();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const testdriveData: TestDriveParams = {
      car_id: car.CarID,
      date_request: formatInput,
    };
    testdriveDispatch(testdriveRequest(testdriveData));
  };
  useEffect(() => {
    if (reqTestDrive.car_id == car.CarID) {
      setIsRequested(true);
    }
  }, [car])

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
              <></>
            )}
            <div className="d-flex justify-content-center mt-4">
              <h3>Request Test Drive</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="full_name" className="form-label fw-bold mt-4">
                Choose Date
              </label>
              <input
                name="requested_date"
                type="date"
                className="form-control"
                id="requested_date"
                value={inputDate}
                onChange={(e) => setInputDate(e.currentTarget.value)}
              />
              <div className="d-flex justify-content-center mt-5 mb-3 gap-4">
                <BlueGreenButton type="submit">
                  Request Test Drive
                </BlueGreenButton>
              </div>
            </form>
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
