import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const HeaderAnimation = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");
  const num = 1000;
  return (
    <>
      {/* Start animation  */}
      <h1 className="text-white text-[40px] ">
        <TypeAnimation
          sequence={[
            1000,
            () => {
              setTypingStatus("Typing...");
            },
            " شركة المجموعه ........",

            1000,
            () => {
              setTypingStatus("Done Typing");
            },
            " شركة المجموعه للخدمات العامة ....",

            1000,
            () => {
              setTypingStatus("Deleting...");
            },

            1000,
            () => {
              setTypingStatus("Done Deleting");
            },
            `  إجمالي إيرادات الشهر الحالي هي ${localStorage.getItem(
              "allMonay"
            )} جنيه `,

            1000,
            () => {
              setTypingStatus("Done Deleting");
            },
            `  إجمالي مصروفات الشهر الحالي هي ${num} جنيه`,
            1000,
            () => {
              setTypingStatus("Done Deleting");
            },
            `  إجمالي مشتريات  الشهر الحالي هي ${num} جنيه`,
          ]}
          repeat={Infinity}
        />
      </h1>
      ;{/* End animation  */}
    </>
  );
};

export default HeaderAnimation;
