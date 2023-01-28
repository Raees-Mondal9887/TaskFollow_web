import React from 'react';
import { HoursBrainstormed, HoursCoded, ProjectsDelivered } from '@/config';
import styles from '@/styles/Stats.module.css';

const Stats = () => {
  return (
    <section className={`${styles.stats} flex justify-evenly py-10 md:py-14`}>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl md:text-5xl font-bold text-secondary">{ProjectsDelivered}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Project <br /> Deleverd
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl  md:text-5xl font-bold text-secondary">{HoursCoded}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Coded
        </p>
      </div>
      <div className="flex flex-col items-center text-center">
        <h5 className="text-2xl md:text-5xl font-bold text-secondary">{HoursBrainstormed}+</h5>
        <p className="text-md md:text-lg font-bold text-white uppercase">
          Hours <br /> Brainsrormed
        </p>
      </div>
    </section>
  );
};

export default Stats;
