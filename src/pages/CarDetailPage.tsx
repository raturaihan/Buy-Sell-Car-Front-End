import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchCar, suggestedCar } from "../redux/actions/carActions";
import { CarDispatch, FavoriteDispatch, TestDriveDispatch, TransactionDispatch } from "../redux/actions/typesActions";
import { RootState } from "../redux/reducers/indexReducers";
import { FormatBalance } from "../utils/utils";
import {
  CarCategory,
  FormContainer,
  SmallFont,
  BlueGreenButton,
  ReverseBlueGreenButton,
  ReverseRedButton,
  CarImage,
} from "../styles/Styled";
import CardCatalog from "../components/CardCatalog";
import {
  addCarFavorite,
  fetchFavorites,
  removeCarFavorite,
} from "../redux/actions/favoriteAction";
import ModalTestDrive from "../components/ModalTestDrive";
import { resetCoupon } from "../redux/actions/transactionActions";
import { resetReqTestDrive } from "../redux/actions/testdriveActions";

function CarDetailPage() {
  const navigate = useNavigate();
  const getIsBuyerRole = () =>
    JSON.parse(localStorage.getItem("role") == "Role BUYER" ? "true" : "false");
  const { id } = useParams();
  const { suggestedCars, suggestedCarsLoading, suggestedCarsError } =
    useSelector((state: RootState) => state.carReducer);
  const { car, carLoading, carError } = useSelector(
    (state: RootState) => state.carReducer
  );
  const { carFavorites , addFavorite, removeFavorite} = useSelector(
    (state: RootState) => state.favoriteReducer
  );
  const [isAddedtoFavorite, setIsAddedtoFavorite] = useState(false);
  const carDispatch: CarDispatch = useDispatch();
  const favoriteDispatch: FavoriteDispatch = useDispatch();
  const transactionDispatch: TransactionDispatch = useDispatch();
  const testdriveDispatch: TestDriveDispatch = useDispatch();

  const handleClickFavorite = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!getIsBuyerRole()) {
      navigate("/register");
    }
    isAddedtoFavorite
      ? favoriteDispatch(removeCarFavorite(car.CarID))
      : favoriteDispatch(addCarFavorite(car.CarID));
  };

  const handleClickTestDrive = () => {
    if (!getIsBuyerRole()) {
      navigate("/register");
    }
  };

  const handleClickBuy = () => {
    if (!getIsBuyerRole()) {
      navigate("/register");
    }
    navigate("/checkout")
  }

  useEffect(() => {
    carDispatch(fetchCar(id));
    carDispatch(suggestedCar(car.category_id));
    favoriteDispatch(fetchFavorites());
    transactionDispatch(resetCoupon());
    testdriveDispatch(resetReqTestDrive());
  }, [carDispatch, car.category_id, id, addFavorite, removeFavorite]);

  useEffect(() => {
    const favoritedCar = carFavorites.find(
      (carfav) => carfav.car_id === car.CarID
    );
    setIsAddedtoFavorite(!!favoritedCar);
  }, [carFavorites]);

  return (
    <div>
      <Navbar />
      <div className="container">
        {carLoading && <h1>Loading...</h1>}
        {!carLoading && carError && <h1>Error: {carError}</h1>}
        {car ? (
          <>
            <div className="row my-4">
              <div className="col-lg-8">
                <CarImage
                  src={car.car_img}
                  alt={car.car_name}
                />
              </div>
              <div className="col-lg-4">
                <FormContainer className="card">
                  <div className="card-body">
                    <h4 className="text-danger">
                      Rp {FormatBalance(car.price)}
                    </h4>
                    <div className="d-flex gap-2 my-3">
                      <CarCategory>{car.transmission_type}</CarCategory>
                      <CarCategory>{car.Category?.category_name}</CarCategory>
                    </div>
                    <div className="bg-light pt-3 px-2 rounded">
                      <h6>
                        {car.car_year} {car.car_name}
                      </h6>
                      <SmallFont>
                        {car.brand_name} | {car.transmission_type} | {car.color}
                      </SmallFont>
                      <p>&#128205;{car.car_location}</p>
                      <div className="d-flex justify-content-between align-items-end">
                        <ReverseRedButton onClick={handleClickFavorite}>
                          {isAddedtoFavorite ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="#ea3c53"
                              className="bi bi-suit-heart-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              fill="currentColor"
                              className="bi bi-suit-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                            </svg>
                          )}
                        </ReverseRedButton>
                        <SmallFont>
                          STNK Validity: {car.stnk_date}/{car.stnk_month}/
                          {car.stnk_year}
                        </SmallFont>
                      </div>
                    </div>
                    <div className="d-flex gap-3 justify-content-center m-3">
                      <BlueGreenButton
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="px-2"
                        onClick={handleClickTestDrive}
                      >
                        Test Drive
                      </BlueGreenButton>
                      {!getIsBuyerRole() ? <></> : <ModalTestDrive />}
                      <ReverseBlueGreenButton className="px-4" onClick={handleClickBuy}>
                        Buy
                      </ReverseBlueGreenButton>
                    </div>
                  </div>
                </FormContainer>
              </div>
            </div>
            <div className="row mt-3">
              <h5>Desccription:</h5>
              <p>
                {car.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quis alias necessitatibus nesciunt recusandae
                quos accusamus laborum labore eligendi? Commodi asperiores
                labore suscipit esse, corrupti accusamus explicabo aut quas et
                sit!
              </p>
            </div>
          </>
        ) : (
          <h1>No Car Detail</h1>
        )}
        <div className="row mt-4">
          <h4 className="text-center">Suggested For You</h4>
          <div className="d-flex mt-3 gap-3 " style={{ overflow: "auto" }}>
            {suggestedCarsLoading ? (
              <p>Loading...</p>
            ) : suggestedCarsError ? (
              <p>Error: {suggestedCarsError}</p>
            ) : suggestedCars.length === 0 ? (
              <p>No Cars Available</p>
            ) : (
              suggestedCars.map((suggestedCar) => {
                return (
                  <CardCatalog car={suggestedCar} key={suggestedCar.CarID} />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailPage;
