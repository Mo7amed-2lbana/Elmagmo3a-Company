import React from "react";

const MainTitle = ({ title }) => {
  return (
    <>
      <div className="main-title  mx-auto  hover:text-second-color">
        <h2 className="text-white font-[600] text-center pb-6 w-fit mx-auto text-[25px] relative z-[99999999999999]">
          {title}
        <div className="befor w-[25px] h-[25px]  bg-[#155E75] z-[99999] border-4 border-second-color absolute start-[50%] translate-x-1/2 bottom-0 rounded-full"></div>
        <div className="after absolute w-full h-[3px] z-1 bg-white bottom-[11px]"></div>
        </h2>
      </div>
    </>
  );
};

export default MainTitle;
