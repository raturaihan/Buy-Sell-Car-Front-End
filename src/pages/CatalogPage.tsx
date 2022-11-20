import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCatalog from "../components/CardCatalog";
import Navbar from "../components/Navbar";
import { fetchCars } from "../redux/actions/carActions";
import { CarDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";

function CatalogPage() {
  const { cars, carsLoading, carsError } = useSelector(
    (state: RootState) => state.carReducer
  );
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    car_name: "",
  });
  console.log(pagination);
  const carDispatch: CarDispatch = useDispatch();

  useEffect(() => {
    carDispatch(fetchCars(pagination));
  }, [carDispatch, pagination]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
                  disabled={pagination.page == 1 ? (true): (false)}
                  onClick={() =>
                    setPagination({
                      page: pagination.page - 1,
                      limit: 10,
                      car_name: "",
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
                          setPagination({ page: page, limit: 10, car_name: "" })
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
                  disabled={pagination.page == cars.TotalPage ? (true): (false)}
                  onClick={() =>
                    setPagination({
                      page: pagination.page + 1,
                      limit: 10,
                      car_name: "",
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
