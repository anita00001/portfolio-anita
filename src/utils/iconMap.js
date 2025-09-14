// Fallback
import { GrServices } from "react-icons/gr";

// Add the icons you referenced in the slice:
import { RiStackLine } from "react-icons/ri";
import { FaServer, FaLaptopCode } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { VscBeaker } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

const ICONS = {
  RiStackLine,
  FaServer,
  FaLaptopCode,
  MdSearch,
  VscBeaker,
  FaDatabase,
  GrServices, // keep fallback in the map too (optional)
};

// Returns a React component for a string key
export const getIconByKey = (key) => ICONS[key] || GrServices;
