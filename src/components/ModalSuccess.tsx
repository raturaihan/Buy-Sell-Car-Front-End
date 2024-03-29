import React from "react";
import { ReverseBlueGreenButton } from "../styles/Styled";
import { Link } from "react-router-dom";

interface modalSuccessDetails {
  modalType: string;
  message: string;
  buttonModal: string;
  pathTarget: string;
  show?: boolean;
  isPayment?: boolean;
}

function ModalSuccess({
  modalType,
  message,
  buttonModal,
  pathTarget,
  show,
  isPayment,
}: modalSuccessDetails) {
  return (
    <div>
      <div className={`modal ${show ? "d-flex" : "d-none"}`} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    fill="currentcolor"
                    className="bi bi-check-circle-fill text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
                <div className="row mt-3">
                  <div className="d-flex justify-content-center">
                    <h3 className="fw-bold text-success">{modalType}</h3>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="d-flex justify-content-center">
                    <p className="fw-bold fs-5">{message}</p>
                  </div>
                </div>
                {isPayment ? (
                  <div className="row mt-3">
                    <p>Virtual Account</p>
                    <h5>12804375802003940</h5>
                  </div>
                ) : (
                  <></>
                )}
                <div className="row my-3">
                  <Link to={pathTarget} className="text-decoration-none">
                    <div className="d-flex justify-content-center gap-4">
                      <ReverseBlueGreenButton
                        type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                      >
                        {buttonModal}
                      </ReverseBlueGreenButton>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccess;
