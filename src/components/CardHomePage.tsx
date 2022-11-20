import React from "react";
import {FormContainer, ColorCard} from '../styles/Styled'

interface cardDetails {
  title: string;
  description: string;
}

function CardHomePage({ title, description }: cardDetails) {
  return (
    <>
      <div className="col-lg-3 col-12 mt-4 bg-light">
        <FormContainer className="card bg-white">
          <ColorCard className="card-img-top rounded-0 d-flex justify-content-center p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          </ColorCard>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </FormContainer>
      </div>
    </>
  );
}

export default CardHomePage;
