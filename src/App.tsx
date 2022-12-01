import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewCarPage from "./pages/Admin/AddNewCarPage";
import CarCategoriesPage from "./pages/Admin/CarCategoriesPage";
import CarListingPage from "./pages/Admin/CarListingPage";
import TestDrivePage from "./pages/Admin/TestDrivePage";
import TransactionPage from "./pages/Admin/TransactionPage";
import CheckoutPage from "./pages/Buyer/CheckoutPage";
import FavoritePage from "./pages/Buyer/FavoritePage";
import GamesPage from "./pages/Buyer/GamesPage";
import ProfilePage from "./pages/Buyer/ProfilePage";
import CarDetailPage from "./pages/CarDetailPage";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProtectedRoutesAdmin from "./routes/ProtectedRoutesAdmin";
import ProtectedRoutesBuyers from "./routes/ProtectedRoutesBuyers";
import UnprotectedRoutes from "./routes/UnprotectedRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/car/:id" element={<CarDetailPage />} />
        <Route element={<UnprotectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutesBuyers />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Route>
        <Route element={<ProtectedRoutesAdmin />}>
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/testdrives" element={<TestDrivePage />} />
          <Route path="/carlisting" element={<CarListingPage />} />
          <Route path="/newcar" element={<AddNewCarPage />} />
          <Route path="/carcategories" element={<CarCategoriesPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
