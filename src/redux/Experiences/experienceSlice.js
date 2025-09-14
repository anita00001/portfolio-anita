import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    experience: [
      {
        id: 1,
        name: "IT Officer",
        role: "Lead IT department",
        organization: "Nepal Government",
        icon: "MdComputer",           // IT/infra
      },
      {
        id: 2,
        name: "Assistant Lecturer",
        role: "Mentor Students",
        organization: "Janabhawana Campus",
        icon: "FaChalkboardTeacher",  // teaching
      },
      {
        id: 3,
        name: "Mentor",
        role: "Mentor junior fellow",
        organization: "Microverse",
        icon: "FaUserGraduate",       // mentoring/graduates
      },
      {
        id: 4,
        name: "Code Reviewer",
        role: "Review codes written on Javascript and React, h;avdioghrohfeovnaiorehoavndk, hqgoihreqoifdalskfqog, ieghoiqregoajef",
        organization: "Microverse",
        icon: "MdRateReview",         // reviewing
      },
    ],
  },
  reducers: {},
});

export default experienceSlice.reducer;
