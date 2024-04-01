import React from "react";
import ReactPlayer from "react-player";
import PlacementCard from "./PlacementCard"; 

const Place = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap items-center gap-5 py-[20px]">
        <div className="w-[600px]  p-2">
          <p className="font-bold text-lg">Placements</p>
          <h2 className="font-semibold mt-5 text-5xl">
            One of the Best Placement Records in Uttarakhand
          </h2>
          <div className="flex justify-center mt-5 gap-5">
            <p className="text-6xl text-yellow-500 font-light">1</p>
            <p className="font-light text-lg">
              Average Placement - 8 LPA - Our handcrafted Curriculum is all set
              to get you placed in top Companies
            </p>
          </div>
          <div className="flex justify-center  mt-10 gap-5">
            <p className="text-6xl text-yellow-500 font-light">2</p>
            <p className="font-light text-lg">
              Dedicated Career Support System - From resume building, mock
              interviews to career outreach plan, our dedicated Placement Cell
              will hand hold you throughout your career journey
            </p>
          </div>
          <div className="flex justify-center  mt-10  gap-5">
            <p className="text-6xl text-yellow-500 font-light">3</p>
            <p className="font-light text-lg">
              Over 50 Marquee Recruiters - Top recruiters include Juspay,
              Netflix, Salesforce, KPMG, Bonami, Finastra, Byju’s, EY, Voltas
              etc.
            </p>
          </div>
        </div>
        <div>
          <div className="md:w-[554px] md:h-[312px]  w-[280px] h-[157px] rounded-md  bg-[#D63736] relative ">
            <div className=" absolute top-[-5px] left-[-5px] player-wrapper2  rounded-md ">
              <ReactPlayer
                
                style={{ borderRadius: "30% !important" }}
                url="https://youtu.be/CbJ-aVDBJSk?list=TLGGb1RasPdP0HczMDAzMjAyNA"
                light="https://ritroorkee.com/wp-content/uploads/2024/02/RIT-Placement-768x432.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <PlacementCard />
      </div>
    </>
  );
};

export default Place;
