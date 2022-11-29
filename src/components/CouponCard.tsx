import React from "react";
import {
  CarImage,
  CouponConteiner,
  SmallFont,
  VerticalLine,
  VoucherIcon,
} from "../styles/Styled";

function CouponCard() {
  return (
    <div>
      <CouponConteiner>
        <div className="container">
        <div className="row">
          <div className="col-auto align-self-center">
          <VoucherIcon
            src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1669718939/gift-voucher_l8unof.png"
            alt=""
            className="rounded mt-2"
          />
          </div>
          <div className="col-auto">
            <VerticalLine></VerticalLine>
          </div>
          <div className="col-auto align-self-center">
          <p className="mt-3">
            PAYDAY500
            <SmallFont className="text-danger">GET RP 500.000 OFF</SmallFont>
          </p>
          </div>
        </div>
        </div>
      </CouponConteiner>
    </div>
  );
}

export default CouponCard;
