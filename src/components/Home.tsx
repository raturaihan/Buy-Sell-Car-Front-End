import React from "react";
import { IconColor } from "../styles/Styled";
import CardHomePage from "./CardHomePage";
import Carousel from "./Carousel";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="container mt-5">
        <div className="row">
          <h2 className="text-center px-5">The way it should be</h2>
        </div>
        <div className="row">
          <CardHomePage
            title="Do more from home"
            description="At CarSEA, you can buy online or at your nearest CarMax store. If you purchase in-store, you can still take care of many details from home, including financing and an offer"
          />
          <CardHomePage
            title="Test drives for real life"
            description="When shopping at a CarSEA store, simply tell a sales associate that you'd like to take a car for a 24-hour test drive. You'll be asked to provide a valid driver's license"
          />
          <CardHomePage
            title="Love it or return it"
            description="We give you a full 30 days (up to 1500 miles) to decide if your car is the perfect fit for your life. If it's not, simply bring it back for a full refund. It's that easy."
          />
          <CardHomePage
            title="All major systems covered"
            description="Our limited warranty covers your vehicle's major systems for 90 days or 4,000 miles, whichever comes first. That's hundreds of parts inside and out. See stores for written details"
          />
        </div>
        <div className="row mt-5">
          <h2 className="text-center px-5">Why Choose Us?</h2>
          <div className="col mt-5">
            <IconColor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-rocket-takeoff-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
                <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
              </svg>
            </IconColor>
            <h4 className="mt-3">Fast Payment</h4>
            <p>
              We don't fool around. Once the deal is made, we pay you as fast as
              1 hour*.
            </p>
            <IconColor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-shield-lock-fill mt-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                />
              </svg>
            </IconColor>
            <h4 className="mt-3">Trusted &amp; Safe</h4>
            <p>
              Our skilled inspectors conduct a thorough inspection to find out
              your car's true value.
            </p>
          </div>
          <div className="col mt-5">
            <IconColor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-tags-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
              </svg>
            </IconColor>
            <h4 className="mt-3">The Best Price</h4>
            <p>
              We're fair with our prices, and we make sure to give you the best
              offer.
            </p>
            <IconColor>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-clipboard-check-fill mt-3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
              </svg>
            </IconColor>
            <h4 className="mt-3">Hassle-Free Process</h4>
            <p>
              Expect a seamless journey from a free inspection to handling all
              the paperwork for you.
            </p>
          </div>
          <div className="col mt-5">
            <img
              src="https://res.cloudinary.com/dl6dxfigu/image/upload/v1668858992/Screenshot_from_2022-11-19_18-56-19_ptdwue.png"
              alt=""
            />
          </div>
        </div>
        <div className="row mt-5">
          <h2 className="text-center px-5">Contact Us</h2>
          <div className="col mt-5">
            <div id="map-container-google-1" className="z-depth-1-half">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.75229480854!2d106.73831862046768!3d-6.227625374476071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f692356a22b3%3A0xdf0d881fd6c3e2e4!2sShopee%20Indonesia!5e0!3m2!1sen!2sid!4v1666261548913!5m2!1sen!2sid"
                width="600"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eius suscipit aperiam rem dolores nemo, incidunt quos optio
              repellendus, fugiat debitis doloribus. Laboriosam aliquid, est
              officiis deserunt incidunt provident rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              asperiores deserunt, dolorem molestias impedit, voluptate iste
              nihil vitae nostrum.
            </p>
            <p>
              <strong>
                SEA Digital Talent
                <br />
                PCP Tower,
                <br />
                Indonesia, ABC 12 Kav 11.
                <br />
              </strong>
              Telephone: +1 234 567 890
              <br />
              FAX: +1 234 567 890
              <br />
              E-mail: <a href="#">mal@sitename.org</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
