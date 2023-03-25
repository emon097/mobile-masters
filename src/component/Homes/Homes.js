import React from "react";

const Homes = () => {
  return (
    <div className=" my-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Quality Repairs, Affordable Prices
            </h1>
            <p className="mb-5">
              Our mobile repair service provides fast and reliable solutions for
              all your phone issues. Our expert technicians use quality parts to
              fix your device at affordable prices. Don't wait any longer, get
              your phone fixed today and enjoy hassle-free communication!
            </p>
            <button className="btn btn-accent text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
