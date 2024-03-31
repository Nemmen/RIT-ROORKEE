import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="gradient-blue border-b-[20px] border-yellow-500 ">
      <div className="w-full h-[max-content] text-white flex justify-center flex-wrap items-center pt-10  ">
        <div className="w-[60%] flex gap-10 md:judtify-start md:text-start text-center justify-center flex-wrap border-b border-gray-700 pb-2">
          <div>
            <img
              src="https://ritroorkee.com/wp-content/uploads/2024/02/RIT-NAAC-LOGO-2.png"
              className="w-[200px]"
              alt=""
            />
          </div>
          <div>
            <p>Contact</p>
            <p className="mt-3">Life @ RIT</p>
            <p className="mt-3">Hostel Life</p>
          </div>
          <div className="md:sms-[30px]">
            <p>Admissions </p>
            <p className="mt-3">Leadership Team</p>
            <p className="mt-3">Placements</p>
          </div>
          <div className="md:ms-[20px]">
            <p>NAAC</p>
            <p className="mt-3"> IQAC</p>
            <p className="mt-3">Careers</p>
          </div>
          <div className="md:ms-auto items-end flex gap-2 justify-center md:justify-end">
            <div className="rounded-full bg-[#142042]  flex justify-center items-center p-[10px] ">
              <FaFacebook className="text-white text-xl" />
            </div>
            <div className="rounded-full bg-[#142042]  flex justify-center items-center p-[10px] ">
              <FaInstagram className="text-white text-xl" />
            </div>

            <div className="rounded-full bg-[#142042]  flex justify-center items-center p-[10px] ">
              <FaYoutube className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[max-content] text-white flex   flex-1  justify-center items-center mt-10 py-5">
        <div className="md:w-[60%] w-[80%] flex flex-wrap justify-around gap-10 pb-2">
        
            <div className="flex justify-between  items-center">
              <p>Privacy & Policy </p>
              <p className="ms-[40px]">Terms of Use</p>

            </div>
            <div>
              <p className="text-center ">
                © 2024 The Uniques. All Rights Reserved
              </p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
