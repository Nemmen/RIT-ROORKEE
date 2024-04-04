import React, { useRef, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { TbSchool } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import ReactPlayer from "react-player";
import Placement from "./Placement";
import { FaProjectDiagram } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import Place from "./Place";
import { FaHotel } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Form from "./fform";

const Hero = () => {
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const image = [
    "https://scontent.cdninstagram.com/v/t39.30808-6/435002994_818039390366028_7868310323730416274_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=HFFMtsfDKX4AX8QO0o4&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDeTMJxmSPRS1UT9N-v9h2YyTh5O1HKQXkl3KJUU074dQ&oe=6611322D",
    "https://scontent.cdninstagram.com/v/t39.30808-6/433138706_816837027152931_2190541635199076047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=bxqNWOTAzp8AX80DxWi&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBYNpEVkJcWazPdUe-vYROQENC9RTg7J1bqYu_jDQ0Cmw&oe=66111927",
    "https://scontent.cdninstagram.com/v/t39.30808-6/434646590_816190517217582_7105212724463744666_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=RJ5DXEmhfZoAX8415U3&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCj7uKqPKaIG3pO2Nw6dcgISsWB65fVobu_CvXua6K4FA&oe=66112843",
    "https://scontent.cdninstagram.com/v/t51.2885-15/434588148_2827066020778065_2113522892421594185_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Logo0_aWe5MAX9j9tby&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfArKPzX5jjGA2rAIDz4KJ19FAE6rqjTmKvq-JqcgrSQxA&oe=66114658",
    "https://scontent.cdninstagram.com/v/t51.2885-15/434578169_966129548565888_8211259325536536546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ki-PPGXxN2IAX-N7CCU&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfDKB-zWzhgfaUYb4wRtOXKjzQz5C8yc6pTH_PkZyLnbMw&oe=66112DAC",
    "https://scontent.cdninstagram.com/v/t51.2885-15/434577851_365129966511739_8915893224863380162_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=zdhN1XOpPcEAX-brO17&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBCgB5zY_hh_RcJUFKgJ86BndsjsAGhyDKkwQu6ecMYjg&oe=66111195",
    "https://scontent.cdninstagram.com/v/t51.2885-15/434374854_1506037546608691_1743883009476270127_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=TA47ZtD8RVMAX_pdYFp&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfAawnO0JSnk0AUYsGCPQ8JpqWURrFveiA4o9vLkAZvh7Q&oe=66111857",
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
  const [formm, setFormm] = useState(true)

  return (
    <>
      {
        formm && <div className="fixed top-[90px] z-[2] p-5 bg-[rgba(0,0,0,0.3)] left-[20%] w-[60%]">
        <div className="w-full h-[maxcontent] flex justify-center items-center bg-[#fff] py-[20px] ">
          <Form setFormm={setFormm}/>
        </div>
      </div>
      }
      <div className="w-full p-3 h-[maxcontent] border-b-[20px] border-yellow-500 gradient-blue flex justify-center items-center py-[150px]  gap-[50px] flex-wrap">
        <div className="text-white md:w-[600px]">
          <h2 className="text-5xl  font-extrabold leading-[60px]">
            The first college in North India to be awarded
            <br /> NAAC A++
          </h2>
          <div className=" mt-4 flex justify-between">
            <div className="">
              <h2 className="font-extrabold text-2xl">3.62/4</h2>
              <div className="flex text-2xl flex-wrap text-red-600 mt-1">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoStarHalfOutline />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-red-600">
                A++
              </h2>
              <p className="font-extrabold text-sm text-wrap">
                NATIONAL ASSESSMENT AND ACCREDITATION COUNCIL <br />
                (NAAC)
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-2 items-center">
              <TbSchool />
              <p className="text-[13px] font-semibold">
                No. 1 in Uttarakhand, No. 5 in North India, and No. 49 in India
              </p>
            </div>
            <div className="flex mt-3 gap-2 items-center">
              <CiGlobe />
              <p className="text-[13px] font-semibold">
                State-of-the-art educational infrastructure and vibrant campus
                life
              </p>
            </div>
            <div className="flex gap-2 mt-3 ">
              <FaBusinessTime />
              <p className="text-[13px] font-semibold">
                22 Placement-focused academic programs in technology,
                engineering, management, and sciences.
              </p>
            </div>
          </div>
          <div className="md:flex  px-2  md:gap-5 mt-5">
            <div className="px-5 py-3 text-center rounded-sm box-border bg-[#d63736] text-sm text-white font-semibold transition duration-300   border border-[#d63736] hover:translate-y-[-10px]">
              Apply now
            </div>
            <div className="px-5 justify-center py-3 mt-5  md:mt-0 rounded-sm text-sm box-border hover:bg-[#d63736] hover:text-white font-semibold bg-white transition duration-300  border border-[#d63736] text-[#d63736] flex items-center">
              Explore Courses{" "}
              <span className="ms-1">
                <FaCaretDown className="" />
              </span>
            </div>
          </div>
          <div className="w-80% flex justify-center bg-gray-200 h-[1px] mt-4"></div>
          <p className="text-[12px] mt-3">
            National Assessment and Accreditation Council, CGPA 3.62/4, as per
            the latest results declared in August 2023.
          </p>
        </div>
        <div>
          <div className="md:w-[473px] md:h-[266px] w-[280px] h-[157px] rounded-md  bg-yellow-500 relative ">
            <div className=" absolute top-[-5px] left-[-5px] player-wrapper rounded-md ">
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/embed/JqMG0GfbX-g?list=TLGG1HwsmK5HiOUzMDAzMjAyNA"
                light="https://ritroorkee.com/wp-content/uploads/2024/01/RIT.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-[50px]"></div>
      <div className="flex w-full py-5 flex-wrap justify-center gap-10 items-center h-[maxcontent] bg-[#D63736]">
        <div>
          <h2 className="font-bold text-white text-center md:text-start md:text-4xl  text-3xl">
            HOLI WISHES FROM RIT FAMILY
          </h2>
          <p className="text-white text-xl md:text-2xl text-center md:text-start text-wrap  mt-5 md:p-0 px-3">
            Celebrate with consent, safe colors, and kindness! Make <br></br>{" "}
            happy memories together.
          </p>
        </div>
        <div>
          <div className="md:w-[554px] md:h-[312px]  w-[280px] h-[157px] rounded-md  relative ">
            <div className=" absolute player-wrapper2  rounded-md ">
              <ReactPlayer
                style={{ borderRadius: "30% !important" }}
                url="https://www.youtube.com/embed/UeT4QYZtWeU?feature=oembed&autoplay=0&loop=0&rel=0&controls=0&showinfo=1&mute=0&wmode=opaque&enablejsapi=1"
                light="https://ritroorkee.com/wp-content/uploads/2024/02/holi-2024.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-[50px]"></div>
      <Placement />
      <div className="w-100 p-[50px]"></div>
      <div className="flex w-full flex-wrap py-5 justify-center gap-10 items-center h-[maxcontent] bg-yellow-500">
        <div>
          <h2 className="font-bold text-center md:text-start text-3xl   text-black md:text-4xl">
            Join a conversation with our Director
          </h2>
          <p className="text-balck text-center md:text-start  md:text-2xl md:p-0 px-2 text-xl text-wrap  mt-5">
            Join us for an exclusive fireside chat into what makes RIT <br />
            stand out in the world of education!
          </p>
        </div>
        <div>
          <div className="md:w-[554px] md:h-[312px] w-[280px] h-[157px] rounded-md  bg-[#D63736] relative ">
            <div className=" absolute top-[-5px] left-[-5px] player-wrapper2 rounded-md ">
              <ReactPlayer
                style={{ borderRadius: "30% !important" }}
                url="https://youtu.be/9kB8sT9DvyE?list=TLGGp4n8h8U2h4czMDAzMjAyNA"
                light="https://ritroorkee.com/wp-content/uploads/2024/02/RIT-Website-Designs.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-[50px]"></div>

      <div className="w-100 p-[50px]"></div>
      <div className="flex w-full flex-wrap py-5 justify-center gap-10 items-center h-[maxcontent] bg-[#e5f3ff]">
        <div>
          <h2 className="font-extrabold text-center md:text-start text-2xl md:p-0 px-2 text-black italic  md:text-4xl">
            #LIFE A GRADE BANAAO, <br />
            NAAC A++ COLLEGE JAAO
          </h2>
          <p className="text-black font-light md:text-4xl text-3xl text-center md:text-start text-wrap  mt-7">
            First and Only in Uttarakhand
          </p>
        </div>
        <div>
          <div className="md:w-[554px] md:h-[312px] w-[280px] h-[157px] rounded-md  bg-[#D63736] relative ">
            <div className=" absolute top-[-5px] left-[-5px] player-wrapper2 rounded-md ">
              <ReactPlayer
                style={{ borderRadius: "30% !important" }}
                url="https://youtu.be/9kB8sT9DvyE?list=TLGGp4n8h8U2h4czMDAzMjAyNA"
                light="https://ritroorkee.com/wp-content/uploads/2024/02/RIT-Website-Designs.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 p-[50px]"></div>
      <Place />
      <div className="w-100 p-[50px]"></div>
      <div className="w-full h-[maxcontent] flex justify-center items-center bg-[#e5f3ff] py-[20px] ">
        <div className="md:w-[60%] w-[90%]">
          <div className="py-2 px-2 flex flex-wrap justify-between items-center">
            <h2 className="text-4xl font-bold">What's Cooking @ RIT?</h2>
            <div className="py-4 text-white items-center ms-auto rounded-sm flex gap-2 px-3 insta-gra">
              <FaInstagram />
              Follow Us on Intstagram
            </div>
          </div>
          <div>
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="overflow-x-scroll w-100 mt-2 scrollbar-hide"
            >
              <div className="flex w-full gap-3">
                {image.map((img, index) => {
                  return (
                    <div key={index} className="w-full h-full">
                      <div className="w-[300px] h-[200px]">
                        <img
                          src={img}
                          alt=""
                          className="w-[300px] h-[200px]  object-cover rounded-md"
                        />
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
              <div
                onClick={rightt}
                className="text-2xl ms-4 hover:cursor-pointer"
              >
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-10 flex-wrap justify-center items-center h-[maxcontene5f3fft] py-10 bg-[#D63736]">
        <div className="text-white w-[500px] p-2">
          <p className="font-semibold text-xl">Life@RIT</p>
          <p className="font-semibold text-4xl mt-4">
            Building Bridges, Not Just Equations
          </p>
          <div className="flex gap-3 mt-4">
            <FaProjectDiagram />
            <p>10+ Student Clubs across Technology, Business & Culture</p>
          </div>
          <div className="flex gap-3 mt-4">
            <CiGlobe />
            <p>Over 2000 Diverse Students from across India and the world</p>
          </div>
          <div className="flex gap-3 mt-4">
            <LuPartyPopper />
            <p>
              Frequent Community Events & Celebrations for lifelong friendships
              & celebrating diversity
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <FaHotel />
            <p>Separate, CCTV monitored Boys' & Girls' Hostels on campus</p>
          </div>
          <div className="flex gap-3 mt-4">
            <MdOutlineSportsCricket className="text-lg" />
            <p className="text-wrap">
              State-of-the-art Sports Facilities including a Football Field,
              Cricket Field, Badminton Court, Basketball Court, Indoor
              Gymnasium, Table Tennis and many more
            </p>
          </div>
          <div className="md:flex">
            <div className="px-5 py-3 rounded-sm justify-center text-sm box-border mt-8 hover:translate-y-[-10px] font-semibold bg-white transition duration-300  border  text-[#d63736] hover flex items-center">
              Explore Courses{" "}
              <span className="ms-1">
                <FaCaretDown className="" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[554px] md:h-[312px] w-[280px] h-[157px]   bg-yellow-500 relative ">
            <div className=" absolute top-[-7px] left-[-7px] player-wrapper2 rounded-md ">
              <ReactPlayer
                style={{ borderRadius: "30% !important" }}
                url="https://youtu.be/WzH9FQv_J1Q?list=TLGG1Odb9jPZ3D4zMDAzMjAyNA"
                light="https://ritroorkee.com/wp-content/uploads/2024/03/Explore-Life-768x432.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
