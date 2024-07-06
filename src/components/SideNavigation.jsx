import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaHome } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
export default function SideNavigation() {
  return (
    <div className="flex flex-col border-l-2 border-solid border-slate-400 p-4">
      <div className="flex flex-col items-start">
        <Link to="/" className="py-2 flex space-x-2">
          <FaHome />
          <span> Home </span>
        </Link>
        <Link to="/recent" className="py-2 flex space-x-2">
          <FaRegClock />
          <span> Recent </span>
        </Link>
        <Link to="/mystaff" className="py-2 flex space-x-2">
          <CiBookmark />
          <span> My stuff </span>
        </Link>
      </div>
    </div>
  );
}
