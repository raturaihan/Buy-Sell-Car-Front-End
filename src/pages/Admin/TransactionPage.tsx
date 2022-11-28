import moment from "moment";
import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchTransactions } from "../../redux/actions/transactionActions";
import { TransactionDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import { FormatBalance } from "../../utils/utils";

function TransactionPage() {
  const { transactions, transactionsLoading, transactionsError } = useSelector(
    (state: RootState) => state.transactionReducer
  );
  const transactionDispatch: TransactionDispatch = useDispatch();
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    full_name: "",
    sort: "DESC",
    sortBy: "created_at",
  });

  useEffect(() => {
    transactionDispatch(fetchTransactions(pagination));
  }, [transactionDispatch, pagination]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="d-flex justify-content-start gap-2">
              <label htmlFor="filter">Sort By</label>
              <select name="filter" id="filter" className="form-select auto"
              value={pagination.sortBy}
              onChange={(e) => {
                setPagination({
                  page: 1,
                  limit: pagination.limit,
                  full_name: pagination.full_name,
                  sort: pagination.sort,
                  sortBy: e.target.value
                })
              }}>
                <option value="created_at">Transaction Date</option>
                <option value="final_amount">Price</option>
              </select>
              <select name="sort" id="sort" className="form-select"
               value={pagination.sort}
               onChange={(e) => {
                 setPagination({
                   page: 1,
                   limit: pagination.limit,
                   full_name: pagination.full_name,
                   sortBy: pagination.sortBy,
                   sort: e.target.value
                 })
               }}>
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end my-2">
              <DebounceInput
                type="text"
                className="form-control"
                placeholder="Search Buyer's Name"
                value={pagination.full_name}
                debounceTimeout={500}
                onChange={(e) =>
                  setPagination({
                    page: pagination.page,
                    limit: pagination.limit,
                    full_name: e.target.value,
                    sort: pagination.sort,
                    sortBy: pagination.sortBy,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {transactionsLoading ? (
            <p>Loading...</p>
          ) : transactionsError ? (
            <p>Error: {transactionsError}</p>
          ) : transactions.Data.length == 0 ? (
            <p>No Transactions Yet</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Transaction Date</th>
                      <th>Buyer's Name</th>
                      <th>Buyer's Email</th>
                      <th>Buyer's Phone</th>
                      <th>Car</th>
                      <th>Payment Type</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.Data.map((val) => (
                      <tr key={val.transaction_id}>
                        <td>{moment(val.CreatedAt).format("HH:mm - D MMMM YYYY")}</td>
                        <td>{val.User.full_name}</td>
                        <td>{val.User.email}</td>
                        <td>{val.User.phone}</td>
                        <td>
                          {val.Car.car_year} {val.Car.car_name}
                        </td>
                        <td>{val.trans_type}</td>
                        <td>Rp {FormatBalance(val.final_amount)}</td>
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
                      full_name: pagination.full_name,
                      sort: pagination.sort,
                      sortBy: pagination.sortBy,
                    })
                  }
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {Array.from(
                { length: transactions.TotalPage },
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
                          full_name: pagination.full_name,
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
                    pagination.page == transactions.TotalPage ? true : false
                  }
                  onClick={() =>
                    setPagination({
                      page: pagination.page + 1,
                      limit: pagination.limit,
                      full_name: pagination.full_name,
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

export default TransactionPage;
