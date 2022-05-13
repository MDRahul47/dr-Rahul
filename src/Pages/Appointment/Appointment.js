import React, { useState } from 'react';
import Footer from '../Home/Footer';
import Appointmenbanner from './Appointmenbanner';
import Avableappointments from './Avableappointments';

const Appointment = () => {
  const [date,setDate] = useState(new Date ());  
    return (
      <div>
        <Appointmenbanner date={date} setDate={setDate}></Appointmenbanner>
        <Avableappointments date={date}></Avableappointments>
        <Footer></Footer>
      </div>
       
    );
};

export default Appointment;