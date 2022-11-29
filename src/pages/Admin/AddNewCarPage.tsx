import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { INewCar } from "../../interface";
import { addNewCar, fetchCarsCategory } from "../../redux/actions/carActions";
import { CarDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import { BlueGreenButton, FormContainer } from "../../styles/Styled";

function AddNewCarPage() {
  const { categories, categoriesLoading, categoriesError } = useSelector(
    (state: RootState) => state.carReducer
  );
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState<string>();
  const carDispatch: CarDispatch = useDispatch();

  useEffect(() => {
    carDispatch(fetchCarsCategory())
  }, [carDispatch]);

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      car_name: { value: string };
      car_year: { value: number };
      price: { value: number };
      color: { value: string };
      brand_name: { value: string };
      car_location: { value: string };
      transmission_type: { value: string };
      stnk_date: { value: number };
      stnk_month: { value: number };
      stnk_year: { value: number };
      category_id: { value: number };
      description: { value: string };
    };
    const carData: INewCar = {
      car_name: target.car_name.value,
      car_year: Number(target.car_year.value),
      car_img: imagePreviewUrl?.toString() || "",
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

    carDispatch(addNewCar(carData));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center m-3">
          <FormContainer className="card mt-5 p-4">
            <div className="card-body">
              <h3 className="text-center">Add New Car</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mt-5">
                  <div className="col">
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
                      defaultValue={""}
                      required
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
                      defaultValue={""}
                      required
                    />
                    <label htmlFor="price" className="form-label fw-bold mt-4">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      id="price"
                      defaultValue={""}
                      required
                    />
                    <label htmlFor="color" className="form-label fw-bold mt-4">
                      Color
                    </label>
                    <input
                      type="text"
                      name="color"
                      className="form-control"
                      id="color"
                      defaultValue={""}
                      required
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
                      defaultValue={""}
                      required
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
                      defaultValue={""}
                      required
                    />
                  </div>
                  <div className="col">
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
                      defaultValue={""}
                      required
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
                        defaultValue={""}
                        required
                      />
                      <h3>/</h3>
                      <input
                        type="number"
                        name="stnk_month"
                        id="stnk_month"
                        className="form-control"
                        placeholder="M"
                        min={1}
                        max={12}
                        step={1}
                        defaultValue={""}
                        required
                      />
                      <h3>/</h3>
                      <input
                        type="number"
                        name="stnk_year"
                        id="stnk_year"
                        placeholder="YYYY"
                        className="form-control"
                        min={2000}
                        defaultValue={""}
                        required
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
                      defaultValue={""}
                      required
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
                      required
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
                      defaultValue={""}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <BlueGreenButton className="px-5" type="submit">
                      Add Car
                    </BlueGreenButton>
                  </div>
                </div>
              </form>
            </div>
          </FormContainer>
        </div>
      </div>
    </div>
  );
}

export default AddNewCarPage;
