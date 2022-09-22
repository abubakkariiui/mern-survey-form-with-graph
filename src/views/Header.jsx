import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="flex justify-center bg-purple-700 shadow-xl mb-8">
        <Link
          className="font-bold text-white hover:bg-purple-600 py-4 px-8 active:bg-purple-600 focus:bg-purple-600 "
          to={"./"}
        >
          <li>Home</li>
        </Link>

        <Link
          className="font-bold text-white hover:bg-purple-600 py-4 px-8 active:bg-purple-600 focus:bg-purple-600 "
          to={"./reports"}
        >
          <li>Reports</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
