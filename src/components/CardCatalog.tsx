import React from 'react'
import Navbar from './Navbar'
import {CarCategory, FormContainer, LocationFont} from '../styles/Styled'

function CardCatalog() {
  return (
    <div>
        <div className='col'>
            <FormContainer className='card'>
                <img src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668920192/Car%20Image/55027707-c66a-4604-8419-d3357e9751ba_gbfyak.webp" alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>2021 Suzuki Pick Up 2.5</h5>
                    <div className='d-flex gap-2'>
                    <CarCategory>Manual</CarCategory>
                    <CarCategory>Sedan</CarCategory>
                    </div>
                    <LocationFont className='card-text mt-2'>&#128205;Bogor</LocationFont>
                    <div className='d-flex justify-content-end'>
                    <h5 className='card-text text-danger'>Rp 116.000.000</h5>
                    </div>
                </div>
            </FormContainer>
        </div>
    </div>
  )
}

export default CardCatalog