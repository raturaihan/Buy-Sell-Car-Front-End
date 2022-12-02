import { cond } from "lodash";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { ICoupon } from "../../interface";
import { getGameCoupons, playGames } from "../../redux/actions/transactionActions";
import { TransactionDispatch } from "../../redux/actions/typesActions";
import { RootState } from "../../redux/reducers/indexReducers";
import { GameContainer, GameCouponConteiner, GamesButton, GameTitle } from "../../styles/Styled";

function GamesPage() {
  const {gameCoupons, playGame, playGameError} = useSelector((state: RootState) => state.transactionReducer)
  const [isActive, setIsActive] = useState(false)
  const [coupon, setCoupon] = useState("")
  const transactionDispatch: TransactionDispatch = useDispatch();
  function toggle(){
    if (playGameError == ""){
      setIsActive(!isActive)
    }
    transactionDispatch(playGames())
  }
  console.log(coupon)
  useEffect(() => {
    transactionDispatch(getGameCoupons())
    if (isActive && playGameError === null) {
      const i = setInterval(() => {
        setCoupon(gameCoupons[Math.floor(Math.random() * gameCoupons.length)].code)
      },50)

      setTimeout(() => {
        setCoupon(playGame.code)
        clearInterval(i)
      }, 4000)
    }
  },[isActive, transactionDispatch, playGame.code, playGameError])

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <GameTitle>
            <h1 className="text-center mt-3">Lucky Draw</h1>
          </GameTitle>
        </div>
        <div className="d-flex justify-content-center mt-3">
            <GameContainer>
                <h3 className="text-center mt-5">Press the button and win the voucher!</h3>
                {playGameError != "" ? (<h5 className="text-danger text-center">Come back tomorrow to play games!</h5>):(<></>)}
                <div className="d-flex justify-content-center mt-5">
                    <GameCouponConteiner className="d-flex justify-content-center">
                      <h1 className="align-self-center">{isActive ? coupon : "?"}</h1>
                    </GameCouponConteiner>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <GamesButton className="py-3 px-5" onClick={toggle}>Play</GamesButton>
                </div>
            </GameContainer>
        </div>
      </div>
    </div>
  );
}

export default GamesPage;
