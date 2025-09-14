import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "education",
  initialState: {
    education: [
      {
        id: 1,
        name: "Full Stack Website Development",
        level: "Advanced course",
        organization: "Microverse Enterprises - Online Education Platform",
        year: "2023",
        icon: "FaLaptopCode",        // online/full-stack course
      },
      {
        id: 2,
        name: "Information and Communication Engineering",
        level: "Masters",
        organization:
          "Institute of Engineering - Central Campus Pulchowk (Tribhuvan University)",
        year: "2019-2023",
        icon: "FaGraduationCap",     // graduate degree
      },
      {
        id: 3,
        name: "Electronics and Communication Engineering",
        level: "Bachelor",
        organization:
          "Advanced College of Engineering and Management (Tribhuvan University)",
        year: "2013-2017",
        icon: "FaUniversity",        // undergraduate/university
      },
    ],
  },
  reducers: {},
});

export default educationSlice.reducer;
