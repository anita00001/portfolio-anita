// Fallback
import { GrServices } from "react-icons/gr";

/** Services icons */
import { RiStackLine } from "react-icons/ri";
import {
  FaServer, FaLaptopCode, FaDatabase,
  FaUserTie, FaUsers, FaChalkboardTeacher, FaLanguage,
  FaGraduationCap, FaUniversity, FaUserGraduate
} from "react-icons/fa";
import { MdSearch, MdLaptopMac, MdComputer, MdRateReview } from "react-icons/md";
import { VscBeaker } from "react-icons/vsc";

/** Technical skills */
import { SiRubyonrails, SiRuby, SiReact, SiJavascript, SiJest, SiPostgresql } from "react-icons/si";

const ICONS = {
  /** Services */
  RiStackLine,
  FaServer,
  FaLaptopCode,
  MdSearch,
  VscBeaker,
  FaDatabase,

  /** Technical skills */
  SiRubyonrails,
  SiRuby,
  SiReact,
  SiJavascript,
  SiJest,
  SiPostgresql,

  /** Soft skills */
  FaUserTie,
  FaUsers,
  FaChalkboardTeacher,
  FaLanguage,
  MdLaptopMac,

  /** Education */
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode, // reused

  /** Experience */
  MdComputer,
  FaChalkboardTeacher, // reused
  FaUserGraduate,
  MdRateReview,

  /** Fallback */
  GrServices,
};

export const getIconByKey = (key) => ICONS[key] || GrServices;
