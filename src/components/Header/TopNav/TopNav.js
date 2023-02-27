import React from 'react';
import { MdEmail, MdSupportAgent } from 'react-icons/md';
import { ContactNumber, ContactEmail } from '@/config';
const TopNav = () => {
  return (
    <div className=" bg-white">
      <div className="max-w-80 flex items-center gap-2 justify-center sm:gap-6 sm:justify-start p-2">
        <div className="flex gap-3 items-center">
          <MdEmail className="text-secondary h-6 w-6" />
          <h3 className="text-sm">Email : {ContactEmail}</h3>
        </div>
        <div className="flex gap-3 items-center">
          <MdSupportAgent className="text-secondary  h-6 w-6" />
          <h3 className="text-sm">Support : +91 {ContactNumber}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
