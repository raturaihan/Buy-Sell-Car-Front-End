import React from "react";
import { BlueGreenButton, ReverseBlueGreenButton } from "../styles/Styled";

function ModalEditProfile() {
  return (
    <div
      className="modal"
      tabIndex={-1}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-center mt-4">
              <h3>Edit Profile</h3>
            </div>
            <label htmlFor="fullname" className="form-label fw-bold mt-4">
              Full Name
            </label>
            <input type="text" className="form-control" />
            <label htmlFor="phone" className="form-label fw-bold mt-2">
              Phone
            </label>
            <input type="text" className="form-control" />
            <div className="d-flex justify-content-center my-3">
            <BlueGreenButton>Edit Profile</BlueGreenButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditProfile;
