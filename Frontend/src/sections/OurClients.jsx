import React from 'react';
import client1 from '../assets/demo-client-logo.png';
const OurClients = () => {
  const clients = [<img src={client1} className='w-36' alt='Client 1' />, <img src={client1} className='w-36 ' alt='Client 1' />, <img src={client1} className='w-36' alt='Client 1' />, <img src={client1} className='w-36 ' alt='Client 1' />, <img src={client1} className='w-36' alt='Client 1' />]; // Replace with <img> tags

  return (
    <section className="py-16 bg-special-section-bg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs font-bold text-maintext uppercase tracking-[0.2em] mb-8 opacity-70">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60">
          {/* Map your client images here */}
          {clients.map((client, index) => (
            <span key={index} className="text-xl font-bold text-gray-400">{client}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;