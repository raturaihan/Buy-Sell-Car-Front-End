import React from "react";
import Navbar from "../components/Navbar";
import {
  CarCategory,
  FormContainer,
  SmallFont,
  BlueGreenButton,
  ReverseBlueGreenButton,
  BlueButton,
} from "../styles/Styled";

function CarDetailPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-8">
          <img style={{maxWidth: '100%'}}
            src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668766806/Car%20Image/yaris_b1oojj.webp"
            alt=""
          />
          </div>
          <div className="col-lg-4">
            <FormContainer className="card">
              <div className="card-body">
                <h4 className="text-danger">Rp 141.000.000</h4>
                <div className="d-flex gap-2 my-3">
                  <CarCategory>Manual</CarCategory>
                  <CarCategory>Hatchback</CarCategory>
                </div>
                <div className="bg-light pt-3 px-2 rounded">
                  <h6>2020 Toyota Yaris G 1.5</h6>
                  <SmallFont>Toyota | Manual | Yellow</SmallFont>
                  <p>&#128205;Bogor</p>
                  <div className="d-flex justify-content-end">
                    <SmallFont>STNK Validity: 20/12/22</SmallFont>
                  </div>
                </div>
                <div className="d-flex gap-3 justify-content-center m-3">
                  <BlueButton>Favorite</BlueButton>
                  <BlueGreenButton className="px-2">Test Drive</BlueGreenButton>
                  <ReverseBlueGreenButton className="px-4">
                    Buy
                  </ReverseBlueGreenButton>
                </div>
              </div>
            </FormContainer>
          </div>
          <div className="row mt-3">
          <h6>Desccription:</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt odit ipsam minus consequuntur porro ex ipsum dolore
                  molestias, perferendis, ullam aspernatur iure. Explicabo
                  commodi excepturi, quam optio accusantium provident saepe?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt est laudantium temporibus molestiae tempora eligendi vitae, veniam placeat, ipsam iure voluptate eveniet maxime, tenetur esse amet aperiam quidem voluptatem.
                </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailPage;
