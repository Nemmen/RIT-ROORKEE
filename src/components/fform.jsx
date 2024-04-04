import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({setFormm}) => {
  const [courseType, setCourseType] = useState("");
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    courseType: "",
    course: "",
    state: "",
    phone: "",
  });

  const changehandle = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbyO3kuREwxWTmP8w1Ay5TBjl6RGN0G_RkFNeX007hVoRkUntjxZFSj7KiZmTkjIkou03A/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    .then(response => {   
      if (response.ok) {
        console.log('Form data submitted successfully');
        // Reset form fields if needed
        setFormdata({
          name: "",
          email: "",
          courseType: "",
          course: "",
          state: "",
          phone: "",
        });
        setFormm((prev)=>!prev)
        toast.success('Form submitted successfully');

      } else {
        console.error('Error submitting form data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const program = [
    {
      cate: "Diploma",
      courses: [
        "Diploma In Civil Engineering",
        "Diploma In Electrical Engineering",
        "Diploma Mechanical Engineering",
      ],
    },
    {
      cate: "Graduation",
      courses: [
        "B. Tech. In Civil Engineering",
        "B. Tech. - Computer Science And Engineering",
        "B. Tech. - Electrical Engineering",
        "B. Tech. - Electronics And Communications Engineering",
        "B. Tech. - Mechanical Engineering",
        "B.sc - Agriculture",
        "B.sc. - Forestry",
        "Bachelor Of Education (b.ed)",
        "B.sc - Optometry",
        "B.sc - Optometry",
        "Bachelor Of Medical Lab Technology",
        "BCA",
        "BBA",
        "BPT",
        "BMRIT",
      ],
    },
    {
      cate: "Post Graduation",
      courses: [
        "Master Of Computer Application (lateral Entry)",
        "Mba - International Business",
        "Mba - Information Technology",
        "Mba - Human Resource Management",
        "Mba-marketing",
        "Mba-marketing",
        "Mba - Finance",
        "M.tech. - Production Engineering",
        "M. Tech. - Electrical Engineering",
        "M.c.a",
        "M.tech In Structural And Construction Engineering",
      ],
    },
  ];

  return (
    <div className="mt-[30px] ">
      <h2 className="font-semibold md:text-3xl text-sm">
        Apply for Admissions 2024
      </h2>
      <form   onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 mt-5 group">
          <input
            type="text"
            name="name"
            id="floating_name"
            value={formData.name}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={changehandle}
            required
          />
          <label
            for="floating_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changehandle}
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <select
          id="courseType"
          name="courseType"
          value={formData.courseType}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          onChange={(e) => {
            return setCourseType(e.target.value), changehandle(e);
          }}
          required
        >
          <option>--Select Course Type*--</option>
          {program.map((item, index) => {
            return (
              <option key={index} value={item.cate}>
                {item.cate}
              </option>
            );
          })}
        </select>
        <select
          id="course"
          value={
            formData.course === ""
              ? courseType === ""
                ? formData.course
                : setFormdata({
                    ...formData,
                    course: program.find((item) => item.cate === courseType)
                      .courses[0],
                  })
              : formData.course
          }
          name="course"
          onChange={changehandle}
          required
          class="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          {courseType === "" || courseType === "--Select Course Type*--" ? (
            <option>--Select Course--</option>
          ) : (
            program.map((item, index) => {
              if (item.cate === courseType) {
                return item.courses.map((course, index) => {
                  return (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  );
                });
              }
            })
          )}
        </select>
        <select
          id="state"
          name="state"
          required
          onChange={changehandle}
          value={formData.state}
          class="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option>--Select Course Type*--</option>
          {statesOfIndia.map((state, index) => {
            return (
              <option key={index} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <div class="relative mt-5 mb-5">
          <span class="absolute start-0 bottom-3 text-gray-500">
            <svg
              class="w-4 h-4 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 19 18"
            >
              <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
            </svg>
          </span>
          <input
            type="text"
            id="floating-phone-number"
            name="phone"
            required
            onChange={changehandle}
            value={formData.phone}
            class="block py-2.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            pattern="[0-9]{10}"
            placeholder=" "
          />
          <label
            for="floating-phone-number"
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Phone number
          </label>
        </div>
        <button className="w-full py-2 text-white bg-blue-600 text-sm">
          Apply Now
        </button>
      </form>
      <div>
        <p className="text-xl md:text-3xl mt-5 text-center">
          Call @ 9554795547
        </p>
      </div>
    </div>
  );
};

export default Form;
