import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuClock8 } from "react-icons/lu";
import { FaUncharted } from "react-icons/fa";

const PlacementCard = () => {
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const students = [
    {
      name: "Himanshi Mishra",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Finastra",
      CTC: "7.5 LPA",
      image_category: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9S4NRyJbPSEz8CLinnkElXNPY681Y8-zGFlIn1ypf-HKig4s5",
    },
    {
      name: "Nancy Verma",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Jio",
      CTC: "7.0 LPA",
      image_category: "https://ritroorkee.com/wp-content/uploads/2024/03/Dikshant-Bohra.png",
    },
    {
      name: "Divakar Dubey",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Finastra",
      CTC: "7.5 LPA",
      image_category: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdq323CFz-SMsrYgo4tyiEAkCvxxvQvr-VOFvDznp-57jZXxvv",
    },
    {
      name: "Himanshi Mishra",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Finastra",
      CTC: "7.5 LPA",
      image_category: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9S4NRyJbPSEz8CLinnkElXNPY681Y8-zGFlIn1ypf-HKig4s5",
    },
    {
      name: "Nancy Verma",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Jio",
      CTC: "7.0 LPA",
      image_category: "https://ritroorkee.com/wp-content/uploads/2024/03/Dikshant-Bohra.png",
    },
    {
      name: "Divakar Dubey",
      degree: "B. Tech. - Computer Science & Engineering",
      year: "2023",
      placed_at: "Finastra",
      CTC: "7.5 LPA",
      image_category: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdq323CFz-SMsrYgo4tyiEAkCvxxvQvr-VOFvDznp-57jZXxvv",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed here
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const leftt = (e) => {
    scrollContainerRef.current.scrollLeft = scrollLeft - 388;
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  const rightt = (e) => {
    scrollContainerRef.current.scrollLeft = scrollLeft + 388;
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  return (
    <div className="flex justify-center items center">
      <div className="w-[90%]">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="overflow-x-scroll transition duration-300  scrollbar-hide"
        >
          <div className="flex mt-6 gap-[89px]   ">
            {students.map((item, index) => {
              return (
                <div className="w-100   h-100">
                  <div className=" w-[300px] h-[533px] bg-yellow-500 rounded-md">
                    <div className="border  rounded-md  bg-white hover:translate-x-[-10px] hover:translate-y-[-10px] transtion duration-300 border-black w-[300px]  h-[533px]">
                      <div className="w-[300px] rounded-md h-[300px]" style={{backgroundImage:`url(${item.image_category})`,backgroundPosition:'center top' ,backgroundSize:'cover'}}>
                      </div>
                      <div className="p-3">
                        <h1 className="font-bold text-xl">{item.name}</h1>
                        <h2 className="font-light text-xl">{item.degree}</h2>
                        <h2 className="font-light text-xl">{item.year}</h2>    
                        <h2 className="font-light text-xl">Placed At : {item.placed_at}</h2>
                        <h2 className="font-light text-xl">CTC : {item.CTC}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end items center mt-6 me-10">
          <div onClick={leftt} className="text-2xl hover:cursor-pointer">
            <FaAngleLeft />
          </div>
          <div onClick={rightt} className="text-2xl ms-4 hover:cursor-pointer">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
