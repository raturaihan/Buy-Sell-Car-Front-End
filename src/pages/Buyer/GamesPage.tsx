import React from "react";
import Navbar from "../../components/Navbar";
import { GameContainer, GameCouponConteiner, GamesButton, GameTitle } from "../../styles/Styled";

function GamesPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <GameTitle>
            <h1 className="text-center m-4">Lucky Draw</h1>
          </GameTitle>
        </div>
        <div className="d-flex justify-content-center mt-3">
            <GameContainer>
                <h3 className="text-center mt-5">Press the button and win the voucher!</h3>
                <div className="d-flex justify-content-center mt-5">
                    <GameCouponConteiner></GameCouponConteiner>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <GamesButton className="py-3 px-5">Play</GamesButton>
                </div>
            </GameContainer>
        </div>
      </div>
    </div>
  );
}

export default GamesPage;
