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
  });
  const[selectCarType, setSelectCarType] = useState("")
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
          <select name="cartype" id="cartype" className="form-select" onChange={(e) => {setSelectCarType(e.target.value)}}>
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
                    value={category.category_name}
                  >
                    {category.category_name}
                  </option>
                );
              })
            )}
          </select>
          <select name="pricerange" id="pricerange" className="form-select">
            <option selected>Select Price Range</option>
          </select>
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
            cars.Data
            .filter((car) => {
              return (
                car.Category.category_name.toLowerCase().includes(selectCarType.toLowerCase())
              )
            })
            .map((car) => {
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
