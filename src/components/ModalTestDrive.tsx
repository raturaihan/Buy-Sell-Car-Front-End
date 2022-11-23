import React, { useState } from 'react'
import { BlueGreenButton } from '../styles/Styled'

function ModalTestDrive() {
//   const [input, setInput] = useState("")

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
              <h3>Request Test Drive</h3>
            </div>
            <form>
              <label htmlFor="full_name" className="form-label fw-bold mt-4">
                Choose Date
              </label>
              <input
                name="requested_date"
                type="date"
                className="form-control"
                id="requested_date"
                // value={input.full_name}
                // onChange={handleChange}
              />
              <div className="d-flex justify-content-center mt-5 mb-3">
                <BlueGreenButton type="submit" data-bs-dismiss="modal">
                  Request Test Drive
                </BlueGreenButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalTestDrive