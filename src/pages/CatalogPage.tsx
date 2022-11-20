import React from "react";
import CardCatalog from "../components/CardCatalog";
import Navbar from "../components/Navbar";

function CatalogPage() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
          <CardCatalog />
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
