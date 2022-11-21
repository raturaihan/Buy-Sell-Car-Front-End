import React from 'react'
import Navbar from './Navbar'
import {CarCategory, FormContainer, SmallFont} from '../styles/Styled'
import { ICar } from '../interface'
import {FormatBalance} from '../utils/utils'
import { Link } from 'react-router-dom'

interface CarCardProps {
  car: ICar;
}

function CardCatalog({car}:CarCardProps) {
  return (
    <div>
      <Link to={`/car/${car.CarID}`} style={{ textDecoration: 'none', color:'black' }}>
      <div className='col'>
            <FormContainer className='card'>
                <img src={car.car_img} alt={car.car_name} />
                <div className='card-body'>
                    <h5 className='card-title'>{car.car_year} {car.car_name}</h5>
                    <div className='d-flex gap-2'>
                    <CarCategory>{car.transmission_type}</CarCategory>
                    <CarCategory>{car.Category.category_name}</CarCategory>
                    </div>
                    <SmallFont className='card-text mt-2'>&#128205;{car.car_location}</SmallFont>
                    <div className='d-flex justify-content-end'>
                    <h5 className='card-text text-danger'>Rp {FormatBalance(car.price)}</h5>
                    </div>
                </div>
            </FormContainer>
        </div>
      </Link>
    </div>
  )
}

export default CardCatalog