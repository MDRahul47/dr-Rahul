import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModeal from './BookingModeal';
import Service from './Service';

const Avableappointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, settreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-28'>
            <p className='text-center text-primary text-3xl'>Available Appointments on {format(date , 'PP')} </p>
            <div className='grid geid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    settreatment={settreatment}
                    ></Service>)
                }
            </div>
            {treatment&& <BookingModeal
             treatment={treatment}
              date={date}
              settreatment={settreatment}
              
              ></BookingModeal>}
        </div>
    );
};

export default Avableappointments;