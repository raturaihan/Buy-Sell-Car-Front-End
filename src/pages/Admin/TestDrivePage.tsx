import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { IUpdateTD, TestDriveParams } from "../../interface";
import {
  getTestDriveAdmin,
  updateTestDrive,
} from "../../redux/actions/testdriveActions";
import { TestDriveDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import { BlueGreenButton, ReverseBlueGreenButton } from "../../styles/Styled";

function TestDrivePage() {
  const { testDriveAdmin, testDriveAdminLoading, testDriveAdminError } =
    useSelector((state: RootState) => state.testdriveReducer);
  const { updateStatusTestDrive} =
    useSelector((state: RootState) => state.testdriveReducer);

  const testdriveDispatch: TestDriveDispatch = useDispatch();
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    sort: "DESC",
    sortBy: "created_at",
  });
  const [status, setStatus] = useState("ACCEPTED");
  const [testdriveid, setTestDriveId] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const testdriveData: IUpdateTD = {
      status: status,
      id: testdriveid,
    };
    testdriveDispatch(updateTestDrive(testdriveData));
  };

  useEffect(() => {
    testdriveDispatch(getTestDriveAdmin(pagination));
  }, [testdriveDispatch, pagination, updateStatusTestDrive]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          {testDriveAdminLoading ? (
            <p>Loading...</p>
          ) : testDriveAdminError ? (
            <p>Error: {testDriveAdminError}</p>
          ) : testDriveAdmin.data.length == 0 ? (
            <p>No Test Drive Request Yet</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Requested Date</th>
                      <th>User's Name</th>
                      <th>User's Email</th>
                      <th>User's Phone</th>
                      <th>Car</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {testDriveAdmin.data.map((val) => (
                      <tr key={val.test_drive_id}>
                        <td>
                          {moment(val.date_request).format("D MMMM YYYY")}
                        </td>
                        <td>{val.User.full_name}</td>
                        <td>{val.User.email}</td>
                        <td>{val.User.phone}</td>
                        <td>
                          {val.Car.car_year} {val.Car.car_name}
                        </td>
                        <td>{val.status}</td>
                        <td>
                          <ReverseBlueGreenButton
                            id={val.test_drive_id.toString()}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={(e) => setTestDriveId(e.currentTarget.id)}
                          >
                            Edit
                          </ReverseBlueGreenButton>
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
                                    <h3>Edit Status</h3>
                                  </div>
                                  <form onSubmit={handleSubmit}>
                                    <div className="row mt-3">
                                      <select
                                        name="statue"
                                        id="status"
                                        className="form-select"
                                        value={status}
                                        onChange={(e) => {
                                          setStatus(e.target.value);
                                        }}
                                      >
                                        <option value="ACCEPTED">
                                          ACCEPTED
                                        </option>
                                        <option value="REJECTED">
                                          REJECTED
                                        </option>
                                        <option value="ON THE WAY">
                                          ON THE WAY
                                        </option>
                                        <option value="DONE">DONE</option>
                                      </select>
                                    </div>
                                    <div className="d-flex justify-content-center my-3">
                                      <BlueGreenButton
                                        type="submit"
                                        data-bs-dismiss="modal"
                                      >
                                        Edit Status
                                      </BlueGreenButton>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
        <div className="row mt-2">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <button
                  className="page-link"
                  aria-label="Previous"
                  disabled={pagination.page == 1 ? true : false}
                  onClick={() =>
                    setPagination({
                      page: pagination.page - 1,
                      limit: pagination.limit,
                      sort: pagination.sort,
                      sortBy: pagination.sortBy,
                    })
                  }
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from(
                { length: testDriveAdmin.total_page },
                (_, i) => i + 1
              ).map((page) => {
                return (
                  <li key={page} className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        setPagination({
                          page: page,
                          limit: pagination.limit,
                          sort: pagination.sort,
                          sortBy: pagination.sortBy,
                        })
                      }
                    >
                      {page}
                    </button>
                  </li>
                );
              })}
              <li className="page-item">
                <button
                  className="page-link"
                  disabled={
                    pagination.page == testDriveAdmin.total_page ? true : false
                  }
                  onClick={() =>
                    setPagination({
                      page: pagination.page + 1,
                      limit: pagination.limit,
                      sort: pagination.sort,
                      sortBy: pagination.sortBy,
                    })
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TestDrivePage;
