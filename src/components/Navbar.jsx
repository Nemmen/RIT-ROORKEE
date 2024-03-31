import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { LuClock8 } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";

import { FaUncharted } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
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
    },
    {
      degree: "B.Sc. – Agriculture",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Agriculture",
    },
    {
      degree: "B.Sc. – Operation Theatre Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
    },
    {
      degree: "B.Sc. – Optometry",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
    },
    {
      degree: "B.Sc. – Radio and Imaging Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
    },
    {
      degree: "B.Tech – Civil Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "B.Tech – Computer Science and Engineering (AI&ML)",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology, Computer Application",
    },
    {
      degree: "B. Tech. – Computer Science & Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology, Computer Application",
    },
    {
      degree: "B.Tech – Electrical Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "B.Tech – Electronics and Communication Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "B.Tech – Mechanical Engineering",
      duration: "4 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "B.Sc. – Medical Lab Technology",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Paramedical Sciences",
    },
    {
      degree: "BBA – Bachelor of Business Administration",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Management",
    },
    {
      degree: "BCA – Bachelor of Computer Application",
      duration: "3 Years",
      mode: "On Campus",
      categories: "Computer Application",
    },
    {
      degree: "BPT – Physiotherapy",
      duration: "4 Years 6 Months",
      mode: "On Campus",
      categories: "Paramedical Sciences",
    },
    {
      degree: "M.Tech – Electrical Engineering",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "M.Tech – Production Engineering",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "M.Tech – Structural Engineering and Construction",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Technology",
    },
    {
      degree: "MBA – Master of Business Administration",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Management",
    },
    {
      degree: "MCA – Master in Computer Application",
      duration: "2 Years",
      mode: "On Campus",
      categories: "Computer Application",
    },
  ];
  const [programs, setprograms] = useState(program1s);
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(null);
  const [selectedCategory, setselectedCategory] = useState("");

  const clickHnadle = () => {
    setToggle(!toggle);
  };
  const handle = (item) =>{

      toggle1 === item ? setToggle1(null) : setToggle1(item)
      toggle1 === item ? setselectedCategory(null) : setselectedCategory(item)



  }

  const fitleer = (id) => {
    const New = program1s.filter((item) => item.categories === id);
    setprograms(New);
    setselectedCategory(id);
  };

  const classs = toggle
    ? "w-full py-2 h-[max-content] text-black bg-white absolute flex shadow-md  z-[2] justify-center  items-center pt-10  "
    : "hidden";

  return (
    <>
      <div className="w-full hidden relative md:block h-[maxcontent] py-4">
        <nav className="flex justify-center gap-[400px] items-center">
          <img
            src="https://ritroorkee.com/wp-content/uploads/2024/01/RIT-NAAC-LOGO-1.pdf-1.png"
            className=" h-[70px]"
          ></img>
          {/* Nav Links */}
          <ul className="flex items-center space-x-6">
            <li>
              <div className="rounded-full bg-[#264087]  flex justify-center items-center p-[10px] ">
                <FaFacebook className="text-white text-xl" />
              </div>
            </li>
            <li>
              <div className="rounded-full bg-[#264087]  flex justify-center items-center p-[10px] ">
                <FaInstagram className="text-white text-xl" />
              </div>
            </li>
            <li className="">
              <div className="rounded-full bg-[#264087]  flex justify-center items-center p-[10px] ">
                <FaYoutube className="text-white text-xl" />
              </div>
            </li>
            <li className="">
              <button className="px-5 py-3 rounded-sm box-border bg-[#d63736] transition duration-300 text-sm text-white font-semibold hover:bg-white ease-in  border border-[#d63736] hover:text-[#d63736]">
                Apply now
              </button>
            </li>
            <li className="">
              <button
                onClick={clickHnadle}
                className="px-5 py-3 rounded-sm text-sm box-border hover:bg-[#d63736] hover:text-white font-semibold bg-white transition duration-300 ease-in  border border-[#d63736] text-[#d63736] flex items-center"
              >
                Explore Courses{" "}
                <span className="ms-1">
                  {toggle ? <FaCaretUp /> : <FaCaretDown />}
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <div className={classs}>
          <div className="w-[65%] py-10 ">
            <div className="grid grid-cols-12 gap-3">
              <div className=" col-span-3 py-2 px-2">
                {categories.map((cate, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        fitleer(cate);
                      }}
                      className={`text-start ps-2 py-2  font-bold mt-2 rounded-md ${
                        cate === selectedCategory
                          ? "bg-[#264087] text-white"
                          : "text-black hover:bg-[#264087] bg-sky-100 hover:text-white"
                      }`}
                    >
                      {cate}
                    </div>
                  );
                })}
              </div>
              <div className=" col-span-9">
                <div className="grid grid-cols-2 gap-5">
                  {programs.map((program, index) => {
                    return (
                      <div
                        key={index}
                        className="col-span-1 bg-yellow-400 relative rounded-md "
                      >
                        <div className="bg-white relative hover:translate-y-[-10px] transition duration-300 hover:translate-x-[-10px] border border-black py-1 px-2   text-black font-light  rounded-md ">
                          <p className="text-start font-bold ps-2 py-1">
                            {program.degree}
                          </p>
                          <div className="flex gap-4">
                            <div className="flex gap-1 items-center">
                              <LuClock8 />
                              <p className="text-start ps-2 py-2">
                                {program.duration}
                              </p>
                            </div>
                            <div className="flex gap-1 items-center">
                              <FaUncharted />
                              <p className="text-start ps-2 py-2">
                                {program.mode}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:hidden py-3 px-2 flex items-center">
          <div>
            {" "}
            <img
              src="https://ritroorkee.com/wp-content/uploads/2024/01/RIT-NAAC-LOGO-1.pdf-1.png"
              className=" h-[40px]"
            ></img>
          </div>
          <button className="ms-auto" onClick={clickHnadle}>
            {toggle ? <FaTimes /> : <FaBarsStaggered />}
          </button>
        </div>
        {toggle && (
          <div className="w-full  bg-white">
            {categories.map((item, index) => {
              return (
                <div>
                  <div className={`flex gap-2 items-center ${
                        item === selectedCategory
                          ? "bg-[#264087] text-white"
                          : ""
                      } font-semibold text-sm px-4 py-2`}
                    key={index}
                    onClick={() => {
                      handle(item);
                    }}
                  >
                    {item} <FaCaretDown />
                  </div>
                  <div>
                    {(toggle1 === item) && (
                      <div>
                        {program1s
                          .filter((value) => value.categories === item)
                          .map((iitem, indee) => {
                            return (
                              <div className="ms-6 mt-2 text-sm" key={indee}>{iitem.degree}</div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
