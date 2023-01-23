import React from 'react';
import { MdEmail } from 'react-icons/md';
import { MdSupportAgent } from 'react-icons/md';

const TopSection = () => {
  return (
    <div className="max-w-[1300px] flex h-[40px] pl-5 gap-3 lg:gap-10 bg-white">
      <div className="flex items-center gap-2 max-w-[200px]">
        <MdEmail className="text-secondary h-[20px] w-[20px] md:h-[25px] w-[25px]" />
        <p className="text-xs md:text-sm text-blk font-normal">Email : info@ditinex.com</p>
      </div>

      <div className="flex items-center gap-2 max-w-[216px]">
        <MdSupportAgent className="text-secondary h-[20px] w-[20px] md:h-[25px] w-[25px]" />
        <p className="text-xs md:text-sm text-blk font-normal">Support : +91 9903614705</p>
      </div>
    </div>
  );
};

export default TopSection;
