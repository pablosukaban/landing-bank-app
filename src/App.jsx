// import styles from './style';
import React from 'react';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">Navbar</div>
      </div>

      {/* Main hero */}
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">Hero</div>
      </div>

      {/* Components */}
      <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          Stats Business Billing CardDeal Testimonials Clients Click to action
          section Footer
        </div>
      </div>
    </div>
  );
};

export default App;
