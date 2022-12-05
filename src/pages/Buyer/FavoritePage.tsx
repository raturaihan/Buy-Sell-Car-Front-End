import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardCatalog from '../../components/CardCatalog';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import { fetchFavorites } from '../../redux/actions/favoriteAction';
import { FavoriteDispatch } from '../../redux/actions/typesActions';
import { RootState } from '../../redux/reducers/indexReducers'

function FavoritePage() {
  const {carFavorites, carFavoritesLoading, carFavoritesError} = useSelector(
    (state: RootState) => state.favoriteReducer
  );
  const favoriteDispatch: FavoriteDispatch = useDispatch();
  useEffect(() => {
    favoriteDispatch(fetchFavorites())
  }, [favoriteDispatch])

  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row mt-5'>
                <h2>Favorites</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4'>
            {carFavoritesLoading ? (
            <p>Loading...</p>
          ) : carFavoritesError ? (
            <p>Error: {carFavoritesError}</p>
          ) : carFavorites.length === 0 ? (
            <p>You haven't favorite any car</p>
          ) : (
            carFavorites.map((car) => {
              return <CardCatalog car={car.Car} key={car.car_id} />;
            })
          )}
            </div>
        </div>
    </div>
  )
}

export default FavoritePage