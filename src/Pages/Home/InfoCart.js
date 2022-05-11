import React from 'react';

const InfoCart = ({img,cartTitle,bgclass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl py-5  ${bgclass}`}>
  <figure className='pl-8'>
      <img src={img} alt="Album"/>

      </figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cartTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default InfoCart;