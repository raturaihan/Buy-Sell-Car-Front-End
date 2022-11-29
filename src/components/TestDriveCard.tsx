import moment from "moment";
import React from "react";
import { ITestDrives } from "../interface";
import { CarCategory, CarImage, FormContainer, SmallFont } from "../styles/Styled";

interface TDProps {
    car: ITestDrives
}

function TestDriveCard({car}: TDProps) {
  return (
    <div>
      <FormContainer className="card">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-2">
              <CarImage
                src={car.Car.car_img} alt={car.Car.car_name}
              />
            </div>
            <div className="col-lg-4 p-2 m-2">
              <h6>{car.Car.car_year} {car.Car.car_name}</h6>
              <div className="d-flex gap-2">
                <CarCategory>{car.Car.transmission_type}</CarCategory>
                <CarCategory>{car.Car.Category?.category_name}</CarCategory>
              </div>
              <SmallFont className="card-text mt-2">&#128205;{car.Car.car_location}</SmallFont>
            </div>
            <div className="col-auto align-self-center">
                <h5>{car.status}</h5>
                <SmallFont className="text-danger">
                  Requested Date: <br />{moment(car.date_request).format('MMMM Do YYYY')}
                </SmallFont>
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
}

export default TestDriveCard;
