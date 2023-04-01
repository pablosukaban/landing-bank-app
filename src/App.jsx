// import styles from './style';
import React from 'react';
import {
    Navbar,
    Hero,
    Stats,
    Business,
    Billing,
    CardDeal,
    Testimonials,
    Client,
    Footer,
    CTA,
} from './components';

const App = () => {
    return (
        <div className='w-full overflow-hidden bg-primary'>
            {/* Navbar */}
            <div className='flex items-center justify-center px-6 sm:px-16'>
                <div className='w-full xl:max-w-[1280px]'>
                    <Navbar />
                </div>
            </div>

            {/* Main hero */}
            <div className='flex items-start justify-center bg-primary'>
                <div className='w-full xl:max-w-[1280px]'>
                    <Hero />
                </div>
            </div>

            {/* Components */}
            <div className='flex items-start justify-center bg-primary px-6 sm:px-16'>
                <div className='w-full xl:max-w-[1280px]'>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Client />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
