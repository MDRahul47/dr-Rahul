import React from 'react';
import Banner from './Banner';
import ButtomBanner from './ButtomBanner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';





const Home = () => {
    return (
       <div >
       <Banner></Banner>
       <Info ></Info>
       <Services></Services>
       <ButtomBanner></ButtomBanner>
       <MakeAppointment></MakeAppointment>
       <Testimonials></Testimonials>
       <Contact></Contact>
       <Footer></Footer>
       </div>
    );
};

export default Home;