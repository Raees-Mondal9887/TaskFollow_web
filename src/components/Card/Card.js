import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
const Card = (props) => {
  return (
    <div className="bg-white md:w-[350px] lg:w-auto flex flex-col items-center p-5 rounded-xl gap-4 shadow hover:shadow-lg transition-shadow cursor-pointer">
      <Image src={props.img} alt="card-image" 
      width="200"
      height={200}
      />
      <h3 className="text-center text-xl">{props.title}</h3>
      {props.children}
      <Link
        href="#"
        className="text-white h-12 w-12 justify-center bg-secondary inline-flex items-center rounded-full shadow-btn-shadow hover:shadow-lg-shadow transition-shadow"
      >
        <BsArrowRight className="h-[30px] w-[43px]" />
      </Link>
    </div>
  );
};

export default Card;
