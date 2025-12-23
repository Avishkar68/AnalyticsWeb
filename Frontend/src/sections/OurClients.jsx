import React from 'react';
import client1 from '../assets/demo-client-logo.png';

const OurClients = () => {
  const clients = [client1, client1, client1, client1, client1];

  return (
    <section className="py-12 md:py-16 bg-special-section-bg">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[10px] md:text-xs font-bold text-maintext uppercase tracking-[0.2em] mb-8 opacity-70">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
          {clients.map((client, index) => (
            <img 
              key={index} 
              src={client} 
              className='w-24 md:w-36 object-contain' 
              alt={`Client ${index + 1}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;