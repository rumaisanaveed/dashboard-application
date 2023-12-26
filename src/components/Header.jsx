import React from "react";

const Header = ({ category, title, categoryColor, titleColor }) => {
  return (
    <div className="mb-10 ">
      <p className="text-gray-500 text-2xl">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
