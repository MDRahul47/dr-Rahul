import React from 'react';
import baby from '../../assets/images/treatment.png';

const ButtomBanner = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={baby} class="max-w-sm rounded-lg shadow-2xl" />
    <div >
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary  to-primary ...">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default ButtomBanner;
