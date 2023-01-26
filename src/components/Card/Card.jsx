import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
const Card = (props) => {
  return (
    <section className="bg-white w-96 flex flex-col items-center p-5 rounded-xl gap-4 shadow">
      <img src={props.img} alt="card-image" />
      <h1 className="text-center text-xl">{props.title}</h1>
      {props.children}
      <a
        href="#"
        className="text-white  h-12 w-12 justify-center bg-secondary inline-flex items-center rounded-full"
      >
        <BsArrowRight className="h-[30px] w-[43px]" />
      </a>
    </section>
  );
};

export default Card;
