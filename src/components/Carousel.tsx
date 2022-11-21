import React from 'react'
import { Link } from 'react-router-dom'
import {BlueGreenButton} from '../styles/Styled'

function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='opacity-50'>
      <img src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668836573/Car-Trade-in-Banner_taa4dp.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-caption d-none d-md-block my-5">
        <h2 className='text-black fw-bold fs-1'>Find the Car You Want, Your Way</h2>
        <h5 className='text-black fs-5'>Then, build your deal to fit your needs</h5>
      </div>
    </div>
    <div className="carousel-item">
      <div className='opacity-75'>
      <img src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668834127/cover2_aztwza.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-caption d-none d-md-block bg-white py-2 my-5 opacity-75 rounded">
        <div className='p-4'>
        <h3 className='text-black fs-1 fw-bold'>Shop on the lot or on the go</h3>
        <h5 className='text-black'>Get ready to choose</h5>
        <Link to={'/catalog'}>
          <BlueGreenButton>See Catalog</BlueGreenButton>
        </Link>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className='opacity-50'>
        <img src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668836768/header1_ix71hi.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-caption d-none d-md-block my-5">
        <h2 className='text-black fw-bold fs-1'>Get a Trade-in Offer Today</h2>
        <h5 className='text-black fs-3'>Join our community now!</h5>
        <Link to={'/register'}>
          <BlueGreenButton className='p-2'>Sign Up</BlueGreenButton>
        </Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel