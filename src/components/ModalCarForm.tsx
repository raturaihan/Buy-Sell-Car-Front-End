import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditCarParams, ICar } from "../interface";
import { editDataCar, fetchCar, fetchCarsCategory, updateCar } from "../redux/actions/carActions";
import { CarDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { BlueGreenButton } from "../styles/Styled";

interface modalFormCarDetails {
    carid: string;
}

function ModalCarForm({carid}: modalFormCarDetails) {
  const { categories, categoriesLoading, categoriesError, car, carLoading} = useSelector(
    (state: RootState) => state.carReducer
  );
  const carDispatch: CarDispatch = useDispatch();

  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string>();
  const [inputText, setInputText] = useState({
    car_name: car.car_name,
    color: car.color,
    brand_name: car.brand_name,
    transmission_type: car.transmission_type,
    car_location: car.car_location,
    description: car.description
  })
  const [inputNum, setInputNum] = useState({
    car_year: car.car_year,
    price: car.price,
    stnk_date:car.stnk_date,
    stnk_month:car.stnk_month,
    stnk_year:car.stnk_year,
    category_id:car.category_id
  })
  console.log(inputNum)

  useEffect(() => {
    carDispatch(fetchCarsCategory());
    carDispatch(fetchCar(carid));
  }, [carDispatch, carid, inputText, inputNum])

  useEffect(() => {
  
  },[carLoading])

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

  const handleChangeText = (event: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText({
      ...inputText,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleChangeNum = (event: React.FormEvent<HTMLInputElement> ) => {
    setInputNum({
      ...inputNum,
      [event.currentTarget.name]: event.currentTarget.valueAsNumber,
    });
  };

  const handleSubmitEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const carData: ICar = {
        CarID: parseInt(carid),
        car_name: inputText.car_name,
        car_year: inputNum.car_year,
        car_img: imagePreviewUrl?.toString(),
        price: inputNum.price,
        color: inputText.color,
        category_id: inputNum.category_id,
        transmission_type: inputText.transmission_type,
        brand_name: inputText.brand_name,
        stnk_date: inputNum.stnk_date,
        stnk_month: inputNum.stnk_month,
        stnk_year: inputNum.stnk_year,
        car_location: inputText.car_location,
        description: inputText.description
    }
    const editCarParams: EditCarParams = {
        car: carData,
        id: carid
    }
    carDispatch(editDataCar(editCarParams))
  }

  return (
    <div>
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
                <label htmlFor="car_name" className="form-label fw-bold mt-4">
                  Name
                </label>
                <input
                  type="text"
                  name="car_name"
                  className="form-control"
                  id="car_name"
                //   placeholder="Honda City RS 1.5"
                  value={inputText.car_name}
                  onChange={handleChangeText}
                />
                <label htmlFor="car_year" className="form-label fw-bold mt-4">
                  Year
                </label>
                <input
                  type="number"
                  name="car_year"
                  className="form-control"
                  id="car_year"
                //   placeholder="2018"
                  value={inputNum.car_year}
                  onChange={handleChangeNum}
                />
                <label htmlFor="price" className="form-label fw-bold mt-4">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  id="price"
                //   placeholder="260000000"
                  value={inputNum.price}
                  onChange={handleChangeNum}
                />
                <label htmlFor="color" className="form-label fw-bold mt-4">
                  Color
                </label>
                <input
                  type="text"
                  name="color"
                  className="form-control"
                  id="color"
                //   placeholder="White"
                  value={inputText.color}
                  onChange={handleChangeText}
                />
                <label htmlFor="brand_name" className="form-label fw-bold mt-4">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand_name"
                  className="form-control"
                  id="brand_name"
                //   placeholder="Honda"
                  value={inputText.brand_name}
                  onChange={handleChangeText}
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
                  id="car_loaction"
                //   placeholder="Jakarta Barat"
                  value={inputText.car_location}
                  onChange={handleChangeText}
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
                  value={inputText.transmission_type}
                  onChange={handleChangeText}
                >
                  <option value="MANUAL">MANUAL</option>
                  <option value="AUTOMATIC">AUTOMATIC</option>
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
                    value={inputNum.stnk_date}
                    onChange={handleChangeNum}
                  />
                  <h3>/</h3>
                  <input
                    type="number"
                    name="stnk_month"
                    id="stnk_month"
                    className="form-control"
                    // placeholder="M"
                    min={1}
                    max={12}
                    step={1}
                    value={inputNum.stnk_month}
                    onChange={handleChangeNum}
                  />
                  <h3>/</h3>
                  <input
                    type="number"
                    name="stnk_year"
                    id="stnk_year"
                    className="form-control"
                    // placeholder="YYYY"
                    min={2000}
                    value={inputNum.stnk_year}
                    onChange={handleChangeNum}
                  />
                </div>
                <label htmlFor="category" className="form-label fw-bold mt-4">
                  Category
                </label>
                <select name="category_id" id="category_id" className="form-select"
                value={inputNum.category_id}
                onChange={(e) => {
                    setInputNum({
                        car_year: inputNum.car_year,
                        price: inputNum.price,
                        stnk_date: inputNum.stnk_date,
                        stnk_month: inputNum.stnk_month,
                        stnk_year: inputNum.stnk_date,
                        category_id: parseInt(e.target.value)
                    })
                }}>
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
                <label htmlFor="car_img" className="form-label fw-bold mt-4">
                  Photo
                </label>
                <input type="file" className="form-control" name="car_image" onChange={handleChangeImage}/>
                <label htmlFor="car_name" className="form-label fw-bold mt-4">
                  Description
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  id="description"
                  value={inputText.description}
                  onChange={handleChangeText}
                />
                <div className="d-flex justify-content-center my-3">
                  <BlueGreenButton type="submit" data-bs-dismiss="modal">Edit Data</BlueGreenButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCarForm;
