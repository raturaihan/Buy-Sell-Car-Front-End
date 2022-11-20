import React from 'react'
import {BgFooter} from '../styles/Styled'

function Footer() {
  return (
    <div>
        <BgFooter className="mt-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-12 text-white mt-5">
                        <h6 className="fw-bold">Our Contact</h6>
                        <p className="lh-lg">
                            <strong>SEA Digitalent</strong><br/>
                            PCP Tower<br/>
                            Pin-21542 Indonesia ID.<br/>
                            (123)458-789-1255-12584<br/>
                            email@domainname.com<br/>
                        </p>
                    </div>
                    <div className="col-lg-4 col-12 text-white mt-5">
                        <h6 className="fw-bold">Latest Post</h6>
                        <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        </p>
                    </div>
                    <div className="col-lg-4 col-12 text-white mt-5">
                        <h6 className="fw-bold">Recent News</h6>
                        <p className="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </BgFooter>
    </div>
  )
}

export default Footer