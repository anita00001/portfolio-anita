// Fallback
import { GrServices } from "react-icons/gr";

/** Services icons */
import { RiStackLine } from "react-icons/ri";
import { FaServer, FaLaptopCode, FaDatabase, FaUserTie, FaUsers, FaChalkboardTeacher, FaLanguage } from "react-icons/fa";
import { MdSearch, MdLaptopMac } from "react-icons/md";
import { VscBeaker } from "react-icons/vsc";

/** Technical skills (Simple Icons) */
import { SiRubyonrails, SiRuby, SiReact, SiJavascript, SiJest, SiPostgresql } from "react-icons/si";
// If you ever want Redux separately: import { SiRedux } from "react-icons/si";

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

  /** Fallback */
  GrServices,
};

// Returns a React component for a string key
export const getIconByKey = (key) => ICONS[key] || GrServices;
// Usage example: const IconComponent = getIconByKey('FaServer'); <IconComponent />