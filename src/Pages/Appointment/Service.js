import React from 'react';

const Service = ({service, settreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body text-center my-12">
          <h2 className=" text-2xl font-bold text-center text-secondary">{name}</h2>
          <p>
              {
                  slots.length>0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available. Try another</span>
              }
          </p>
          <p>{slots.length}   {slots.length >1 ? 'Spaces' : 'space'} Available</p>
          <div className="card-actions mx-auto">
            
             <label
              disabled={slots.length===0} 
              onClick={()=>settreatment(service)}
              htmlFor="booking-modal" className="btn modal-button btn-sm btn-secondary bg-gradient-to-r from-secondary  to-primary"
              
              >Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;