import React from "react";
import { Link } from "react-router-dom";


interface alertDetails {
    message: string | null;
    show?: boolean;
    type: string;
  }

function Alert({message, show, type}:alertDetails) {
  return (
    <div className={`${show} ? "d-flex" : "d-none"`}>
      <div className={`alert alert-${type} alert-dismissible`} role="alert">
        <div>{message}</div>
      </div>
    </div>
  );
}

export default Alert;
