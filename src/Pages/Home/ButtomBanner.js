import React from 'react';
import baby from '../../assets/images/treatment.png';

const ButtomBanner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={baby} className="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary  to-primary ...">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default ButtomBanner;
