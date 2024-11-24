import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './Services/serviceSlice';
import technicalSkillReducer from './Skills/technicalSkillSlice';
import softSkillReducer from './Skills/softSkillSlice';
import educationReducer from './Educations/educationSlice';
import experienceReducer from './Experiences/experienceSlice';
import formReducer from './Forms/formSlice';
import projectReducer from './Projects/projectSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
    technicalSkill: technicalSkillReducer,
    softSkill: softSkillReducer,
    experience: experienceReducer,
    education: educationReducer,
    form: formReducer,
    projects: projectReducer,
  },
});

export default store;
