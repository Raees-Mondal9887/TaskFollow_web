import React from 'react';

const Stats = () => {
  return (
    <div className="stats flex justify-evenly py-10 md:py-14">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-secondary">39+</h2>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Project <br /> Deleverd
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl  md:text-5xl font-bold text-secondary">1379+</h2>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Coded
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-secondary">2200+</h2>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Brainsrormed
        </p>
      </div>
    </div>
  );
};

export default Stats;
