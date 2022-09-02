import React from 'react';
import { clients } from '../constants';

const Client = () => {
  return (
    <section className="flex justify-center items-center my-4">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map((item) => (
          <div
            key={item.id}
            className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[100px]"
          >
            <img
              src={item.logo}
              alt="client logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
