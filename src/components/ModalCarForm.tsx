import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditCarParams, ICar } from "../interface";
import {
  editDataCar,
  fetchCar,
  fetchCarsCategory,
  updateCar,
} from "../redux/actions/carActions";
import { CarDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton } from "../styles/Styled";

interface modalFormCarDetails {
  car: ICar|undefined;
}

function ModalCarForm({ car }: modalFormCarDetails) {
  const {
    categories,
    categoriesLoading,
    categoriesError,
  } = useSelector((state: RootState) => state.carReducer);
  const carDispatch: CarDispatch = useDispatch();

  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string>();

  useEffect(() => {
  }, [car]);

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "final_project_car_image");
    const uploadPost = await axios.post(
      "https://api.cloudinary.com/v1_1/dl6dxfigu/image/upload",
      formData
    );
    setImagePreviewUrl(uploadPost.data.secure_url);
  };

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      car_name: { value: string };
      car_year: {value: number};
      price: {value: number};
      color: {value: string};
      brand_name: {value: string};
      car_location: {value: string};
      transmission_type: {value: string};
      stnk_date: {value: number};
      stnk_month: {value: number};
      stnk_year: {value: number};
      category_id: {value: number};
      description: {value: string};
    };
    const carData: ICar = {
      CarID: car?.CarID||-1,
      car_name: target.car_name.value,
      car_year: Number(target.car_year.value),
      car_img: imagePreviewUrl?.toString()||"",
      price: Number(target.price.value),
      color: target.color.value,
      category_id: Number(target.category_id.value),
      transmission_type: target.transmission_type.value,
      brand_name: target.brand_name.value,
      stnk_date: Number(target.stnk_date.value),
      stnk_month: Number(target.stnk_month.value),
      stnk_year: Number(target.stnk_year.value),
      car_location: target.car_location.value,
      description: target.description.value,
    };
    const editCarParams: EditCarParams = {
      car: carData,
      id: car?.CarID.toString()||'',
    };
    carDispatch(editDataCar(editCarParams));
  };

  return (
    <div>
      <>
        <div
          className="modal"
          tabIndex={-1}
          id="carModal"
          aria-labelledby="carModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="d-flex justify-content-center mt-4">
                  <h3>Edit Car Data</h3>
                </div>
                    <form onSubmit={handleSubmitEdit}>
                      <label
                        htmlFor="car_name"
                        className="form-label fw-bold mt-4"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="car_name"
                        className="form-control"
                        id="car_name"
                        defaultValue={car?.car_name}
                      />
                      <label
                        htmlFor="car_year"
                        className="form-label fw-bold mt-4"
                      >
                        Year
                      </label>
                      <input
                        type="number"
                        name="car_year"
                        className="form-control"
                        id="car_year"
                        defaultValue={car?.car_year}
                      />
                      <label
                        htmlFor="price"
                        className="form-label fw-bold mt-4"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        id="price"
                        defaultValue={car?.price}
                      />
                      <label
                        htmlFor="color"
                        className="form-label fw-bold mt-4"
                      >
                        Color
                      </label>
                      <input
                        type="text"
                        name="color"
                        className="form-control"
                        id="color"
                        defaultValue={car?.color}
                      />
                      <label
                        htmlFor="brand_name"
                        className="form-label fw-bold mt-4"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand_name"
                        className="form-control"
                        id="brand_name"
                        defaultValue={car?.brand_name}
                      />
                      <label
                        htmlFor="car_location"
                        className="form-label fw-bold mt-4"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="car_location"
                        className="form-control"
                        id="car_location"
                        defaultValue={car?.car_location}
                      />
                      <label
                        htmlFor="transmission_type"
                        className="form-label fw-bold mt-4"
                      >
                        Transmission Type
                      </label>
                      <select
                        name="transmission_type"
                        id="transmission_type"
                        className="form-control"
                        defaultValue={car?.transmission_type}
                      >
                        <option value="Manual">MANUAL</option>
                        <option value="Automatic">AUTOMATIC</option>
                      </select>
                      <label
                        htmlFor="stnk_validity"
                        className="form-label fw-bold mt-4"
                      >
                        STNK Validity
                      </label>
                      <div className="d-flex gap-2">
                        <input
                          type="number"
                          name="stnk_date"
                          id="stnk_date"
                          className="form-control"
                          placeholder="D"
                          min={1}
                          max={31}
                          step={1}
                          defaultValue={car?.stnk_date}
                        />
                        <h3>/</h3>
                        <input
                          type="number"
                          name="stnk_month"
                          id="stnk_month"
                          className="form-control"
                          min={1}
                          max={12}
                          step={1}
                          defaultValue={car?.stnk_month}
                        />
                        <h3>/</h3>
                        <input
                          type="number"
                          name="stnk_year"
                          id="stnk_year"
                          className="form-control"
                          min={2000}
                          defaultValue={car?.stnk_year}
                        />
                      </div>
                      <label
                        htmlFor="category"
                        className="form-label fw-bold mt-4"
                      >
                        Category
                      </label>
                      <select
                        name="category_id"
                        id="category_id"
                        className="form-select"
                        defaultValue={car?.category_id}
                      >
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
                                value={category.category_id}
                              >
                                {category.category_name}
                              </option>
                            );
                          })
                        )}
                      </select>
                      <label
                        htmlFor="car_img"
                        className="form-label fw-bold mt-4"
                      >
                        Photo
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="car_image"
                        onChange={handleChangeImage}
                      />
                      <label
                        htmlFor="car_name"
                        className="form-label fw-bold mt-4"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        defaultValue={car?.description}
                      />
                      <div className="d-flex justify-content-center my-3">
                        <BlueGreenButton type="submit" data-bs-dismiss="modal">
                          Edit Data
                        </BlueGreenButton>
                      </div>
                    </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ModalCarForm;
