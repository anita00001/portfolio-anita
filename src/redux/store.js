import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './Services/serviceSlice';
import technicalSkillReducer from './Skills/technicalSkillSlice';
import softSkillReducer from './Skills/softSkillSlice';

const store = configureStore({
  reducer: {
    service: serviceReducer,
    technicalSkill: technicalSkillReducer,
    softSkill: softSkillReducer,
  },
});

export default store;
