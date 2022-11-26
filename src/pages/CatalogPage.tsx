import { delay } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCatalog from "../components/CardCatalog";
import Navbar from "../components/Navbar";
import { fetchCars, fetchCarsCategory } from "../redux/actions/carActions";
import { CarDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { DebounceInput } from "react-debounce-input";

function CatalogPage() {
  const { cars, carsLoading, carsError } = useSelector(
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

  const carDispatch: CarDispatch = useDispatch();

  useEffect(() => {
    carDispatch(fetchCarsCategory());
    carDispatch(fetchCars(pagination));
  }, [carDispatch, pagination]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="d-flex gap-3">
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
          <div className="container">
          <div className="row"><p className="text-center">Select Price Range</p></div>
          <div className="row">
            <input type="range" className="form-range" min="70000000" max="1000000000" step={"100000000"}/>
          </div>
          </div>
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          {carsLoading ? (
            <p>Loading...</p>
          ) : carsError ? (
            <p>Error: {carsError}</p>
          ) : cars.Data.length === 0 ? (
            <p>No Cars Available</p>
          ) : (
            cars.Data.map((car) => {
              return <CardCatalog car={car} key={car.CarID} />;
            })
          )}
        </div>
        <div className="row mt-5">
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
    </div>
  );
}

export default CatalogPage;
