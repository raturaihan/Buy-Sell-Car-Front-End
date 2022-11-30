import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { RootState } from "../../redux/reducers/indexReducers";

function CarCategoriesPage() {
  const { categories, categoriesLoading, categoriesError } = useSelector(
    (state: RootState) => state.carReducer
  );
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default CarCategoriesPage;
