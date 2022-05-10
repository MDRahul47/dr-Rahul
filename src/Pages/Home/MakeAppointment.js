import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
           background: `url(${appointment})`
        }
            
        } className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
            <img className='mt-[-170px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
            <h3 className='text-primary font-bold'>Appointment</h3>
            <h2 className='text-3xl text-white'>Make an appointment Today </h2>
            <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum ad assumenda excepturi illum magni, est consequatur voluptatem cupiditate. Non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi corrupti sint minima amet suscipit, id possimus expedita deserunt fugiat? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius exercitationem reprehenderit quo nisi placeat accusamus nobis voluptatibus voluptate expedita quasi.</p>
            <button className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary  to-primary ...">Get Started</button>
            </div>
            
        </section>
    );
};

export default MakeAppointment;