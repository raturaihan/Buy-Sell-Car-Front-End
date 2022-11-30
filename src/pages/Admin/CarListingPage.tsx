import React, { isValidElement, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ModalCarForm from "../../components/ModalCarForm";
import Navbar from "../../components/Navbar";
import { ICar } from "../../interface";
import {
  deleteCarListing,
  fetchCars,
  fetchCarsCategory,
} from "../../redux/actions/carActions";
import { CarDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import {
  BlueGreenButton,
  ReverseBlueGreenButton,
  ReverseRedButton,
} from "../../styles/Styled";
import { FormatBalance, GetMaximumPrice, GetMinimumPrice } from "../../utils/utils";

function CarListingPage() {
  const { cars, carsLoading, carsError, deleteCar, updateCar } = useSelector(
    (state: RootState) => state.carReducer
  );
  const { categories, categoriesLoading, categoriesError } = useSelector(
    (state: RootState) => state.carReducer
  );
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    car_name: "",
    category_id: "",
    min_price: "",
    max_price: "",
  });
  const [carId, setCarId] = useState("");
  const [selectedCar, setSelectedCar] = useState<ICar>();
  const carDispatch: CarDispatch = useDispatch();

  const handleClickEdit = (id: string) => {
    const car = cars.Data.find((c) => c.CarID === Number(id));
    setSelectedCar(car);
  };

  useEffect(() => {
    carDispatch(fetchCarsCategory());
    carDispatch(fetchCars(pagination));
  }, [carDispatch, pagination, deleteCar, updateCar]);

  const handleDelete = () => {
    carDispatch(deleteCarListing(carId));
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <select
              name="cartype"
              id="cartype"
              className="form-select"
              value={pagination.category_id}
              onChange={(e) => {
                setPagination({
                  page: 1,
                  limit: pagination.limit,
                  car_name: pagination.car_name,
                  category_id: e.target.value,
                  min_price: pagination.min_price,
                  max_price: pagination.max_price,
                });
              }}
            >
              <option value="">All Car Type</option>
              {categoriesLoading ? (
                <p>Loading...</p>
              ) : categoriesError ? (
                <p>Error: {categoriesError}</p>
              ) : categories.length === 0 ? (
                <p>No Categories Available</p>
              ) : (
                categories.map((category) => {
                  return (
                    <option
                      key={category.category_id}
                      value={category.category_id.toString()}
                    >
                      {category.category_name}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <div className="col">
          <select
            name="price-range"
            id="price-range"
            className="form-select"
            onChange={(e) => {
              setPagination({
                page: 1,
                limit: pagination.limit,
                car_name: pagination.car_name,
                category_id: pagination.category_id,
                min_price: GetMinimumPrice(e.target.value),
                max_price: GetMaximumPrice(e.target.value),
              });
            }}
          >
            <option value="">Select Price Range</option>
            <option value="under150">Under Rp 150.000.000</option>
            <option value="between150_250">
              Rp 150.000.000 - Rp 250.000.000
            </option>
            <option value="between250_350">
              Rp 250.000.000 - Rp 350.000.000
            </option>
            <option value="between350_450">
              Rp 350.000.000 - Rp 450.000.000
            </option>
            <option value="above450">Above Rp 450.000.000</option>
          </select>
          </div>
          <div className="col">
            <DebounceInput
              type="text"
              className="form-control"
              placeholder="Search..."
              value={pagination.car_name}
              debounceTimeout={500}
              onChange={(e) =>
                setPagination({
                  page: pagination.page,
                  limit: pagination.limit,
                  car_name: e.target.value,
                  category_id: pagination.category_id,
                  min_price: pagination.min_price,
                  max_price: pagination.max_price,
                })
              }
            />
          </div>
          <div className="col-lg-2">
            <div className="d-flex justify-content-end">
              <Link to={"/newcar"}>
                <BlueGreenButton>Add New Car</BlueGreenButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {carsLoading ? (
            <p>Loading...</p>
          ) : carsError ? (
            <p>Error: {carsError}</p>
          ) : cars.Data.length == 0 ? (
            <p>No Data Car</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Color</th>
                      <th>Category</th>
                      <th>Transmission Type</th>
                      <th>STNK Validity</th>
                      <th>Location</th>
                      <th>Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cars.Data.map((val) => (
                      <tr key={val.CarID}>
                        <td>
                          {val.car_year} {val.car_name}
                        </td>
                        <td>Rp {FormatBalance(val.price)}</td>
                        <td>{val.color}</td>
                        <td>{val.Category?.category_name}</td>
                        <td>{val.transmission_type}</td>
                        <td>
                          {val.stnk_date}/{val.stnk_month}/{val.stnk_year}
                        </td>
                        <td>{val.car_location}</td>
                        <td>
                          <img
                            src={val.car_img}
                            alt={val.car_name}
                            className="w-100"
                          />
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-2 mt-2">
                            <ReverseBlueGreenButton
                              id={val.CarID?.toString()}
                              data-bs-toggle="modal"
                              data-bs-target="#carModal"
                              onClick={(e) =>
                                handleClickEdit(e.currentTarget.id)
                              }
                            >
                              Edit
                            </ReverseBlueGreenButton>
                            <ModalCarForm car={selectedCar} />
                            <ReverseRedButton
                              id={val.CarID?.toString()}
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={(e) => setCarId(e.currentTarget.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-trash3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                              </svg>
                            </ReverseRedButton>
                            <div
                              className="modal"
                              tabIndex={-1}
                              id="deleteModal"
                              aria-labelledby="deleteModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-body">
                                    <div className="d-flex justify-content-center my-3">
                                      <h5>
                                        Are you sure want to delete this car?
                                      </h5>
                                    </div>
                                    <div className="d-flex justify-content-center gap-2 my-2">
                                      <BlueGreenButton
                                        data-bs-dismiss="modal"
                                        onClick={handleDelete}
                                      >
                                        Yes
                                      </BlueGreenButton>
                                      <ReverseBlueGreenButton data-bs-dismiss="modal">
                                        No
                                      </ReverseBlueGreenButton>
                                    </div>
                                  </div>
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
      </div>
      <div className="row mt-2">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Previous"
                disabled={pagination.page == 1 ? true : false}
                onClick={() =>
                  setPagination({
                    page: pagination.page - 1,
                    limit: pagination.limit,
                    car_name: pagination.car_name,
                    category_id: pagination.category_id,
                    min_price: pagination.min_price,
                    max_price: pagination.max_price,
                  })
                }
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {Array.from({ length: cars.TotalPage }, (_, i) => i + 1).map(
              (page) => {
                return (
                  <li key={page} className="page-item">
                    <button
                      className="page-link"
                      onClick={() =>
                        setPagination({
                          page: page,
                          limit: pagination.limit,
                          car_name: pagination.car_name,
                          category_id: pagination.category_id,
                          min_price: pagination.min_price,
                          max_price: pagination.max_price,
                        })
                      }
                    >
                      {page}
                    </button>
                  </li>
                );
              }
            )}
            <li className="page-item">
              <button
                className="page-link"
                disabled={pagination.page == cars.TotalPage ? true : false}
                onClick={() =>
                  setPagination({
                    page: pagination.page + 1,
                    limit: pagination.limit,
                    car_name: pagination.car_name,
                    category_id: pagination.category_id,
                    min_price: pagination.min_price,
                    max_price: pagination.max_price,
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
  );
}

export default CarListingPage;
