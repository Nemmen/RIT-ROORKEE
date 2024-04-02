import React, { useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { LuClock8 } from "react-icons/lu";
import { FaUncharted } from "react-icons/fa";

const Placement = () => {
  const categories = [
    "Education",
    "Agriculture",
    "Paramedical Sciences",
    "Technology",
    "Computer Application",
    "Management",
  ];
  const program1s = [
    {
      degree: "B.Ed – Bachelor of Education",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Education",
      reasons: [
        "Customized curriculum designed to meet industry demands",
        "Flexible learning options, including online and hybrid formats",
        "Career-focused support services, including job placement assistance",
      ],
    },
    {
      degree: "B.Sc. – Agriculture",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Agriculture",
      reasons: [
        "Customized curriculum designed to meet industry demands",
        "Flexible learning options, including online and hybrid formats",
        "Career-focused support services, including job placement assistance",
      ],
    },
    {
      degree: "B.Sc. – Operation Theatre Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
      reasons: [
        "State-of-the-art facilities and laboratories",
        "Clinical training opportunities in top healthcare institutions",
        "Emphasis on practical skills development alongside theoretical knowledge",
      ],
    },
    {
      degree: "B.Sc. – Optometry",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
      reasons: [
        "State-of-the-art facilities and laboratories",
        "Clinical training opportunities in top healthcare institutions",
        "Emphasis on practical skills development alongside theoretical knowledge",
      ],
    },
    {
      degree: "B.Sc. – Radio and Imaging Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
      reasons: [
        "State-of-the-art facilities and laboratories",
        "Clinical training opportunities in top healthcare institutions",
        "Emphasis on practical skills development alongside theoretical knowledge",
      ],
    },
    {
      degree: "B.Tech – Civil Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B.Tech – Computer Science and Engineering (AI&ML)",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology, Computer Application",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B. Tech. – Computer Science & Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology, Computer Application",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B.Tech – Electrical Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B.Tech – Electronics and Communication Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B.Tech – Mechanical Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "B.Sc. – Medical Lab Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
      reasons: [
        "State-of-the-art facilities and laboratories",
        "Clinical training opportunities in top healthcare institutions",
        "Emphasis on practical skills development alongside theoretical knowledge",
      ],
    },
    {
      degree: "BBA – Bachelor of Business Administration",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Management",
      reasons: [
        "Internationally renowned faculty with real-world experience",
        "Dynamic and interactive learning environment",
        "Strong alumni network offering valuable connections",
      ],
    },
    {
      degree: "BCA – Bachelor of Computer Application",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Computer Application",
      reasons: [
        "Customized curriculum designed to meet industry demands",
        "Flexible learning options, including online and hybrid formats",
        "Career-focused support services, including job placement assistance",
      ],
    },
    {
      degree: "BPT – Physiotherapy",
      duration: "4 Years 6 Months",
      mode: "On Campus",
      categories: "Paramedical Sciences",
      reasons: [
        "State-of-the-art facilities and laboratories",
        "Clinical training opportunities in top healthcare institutions",
        "Emphasis on practical skills development alongside theoretical knowledge",
      ],
    },
    {
      degree: "M.Tech – Electrical Engineering",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "M.Tech – Production Engineering",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "M.Tech – Structural Engineering and Construction",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
      reasons: [
        "Cutting-edge curriculum tailored to industry needs",
        "Experienced faculty with expertise in the field",
        "Opportunities for hands-on experience and internships",
      ],
    },
    {
      degree: "MBA – Master of Business Administration",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Management",
      reasons: [
        "Internationally renowned faculty with real-world experience",
        "Dynamic and interactive learning environment",
        "Strong alumni network offering valuable connections",
      ],
    },
    {
      degree: "MCA – Master in Computer Application",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Computer Application",
      reasons: [
        "Customized curriculum designed to meet industry demands",
        "Flexible learning options, including online and hybrid formats",
        "Career-focused support services, including job placement assistance",
      ],
    },
  ];
  const [selectedCategory, setselectedCategory] = useState("");
  const [programs, setprograms] = useState(program1s);

  const fitleer = (id) => {
    const New = program1s.filter((item) => item.categories === id);
    setprograms(New);
    setselectedCategory(id);
  };
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      <div className="md:w-[60%] w-[96%]">
        <h2 className="font-bold text-3xl">Upgrade. Evolve. Launch.</h2>
        <h2 className="font-bold text-[43px] mt-2 text-[#264087]">
          Hands-on & Placement-Driven Courses
        </h2>
        <div className="flex items-center  flex-wrap">
          {categories.map((categorie, index) => {
            return (
              <div
                key={index}
                onClick={() => fitleer(categorie)}
                className={`px-3 py-2  me-2 mt-2 rounded-md font-semibold ${
                  categorie === selectedCategory
                    ? "bg-[#264087] text-white"
                    : "text-black hover:bg-[#264087] bg-sky-100 hover:text-white"
                }`}
              >
                {categorie}
              </div>
            );
          })}
        </div>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="overflow-x-scroll scrollbar-hide"
        >
          <div className="flex mt-6 gap-[89px]   ">
            {programs.map((item, index) => {
              return (
                <div className="w-100   h-100">
                  <div className=" w-[300px] h-[533px] bg-yellow-500 rounded-md">
                    <div className="border transition duration-300 rounded-md p-3 bg-white hover:translate-x-[-10px] hover:translate-y-[-10px] ease-in-out border-black w-[300px]  h-[533px]">
                      <div className="flex">
                        <h3 className="bg-[#264087] rounded-md text-sm px-3 w-[maxcontent] text-white font-bold items-center py-2">
                          {item.categories}
                        </h3>
                      </div>
                      <h2 className="pb-3 mt-4 text-xl font-semibold  border-b">
                        {item.degree}
                      </h2>
                      <div className="flex gap-2 items-center text-sm mt-3">
                        <LuClock8 />
                        {item.duration}
                      </div>
                      <div className="flex items-center pb-3 mt-2 border-b  text-sm gap-2">
                        <FaUncharted />
                        {item.mode}
                      </div>
                      <div className="mt-4">
                        {item.reasons.map((itemm, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center mt-3 text-[12px] gap-3"
                            >
                              <div>
                                <FaAngleRight />
                              </div>
                              <p>{itemm}</p>
                            </div>
                          );
                        })}
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

export default Placement;
