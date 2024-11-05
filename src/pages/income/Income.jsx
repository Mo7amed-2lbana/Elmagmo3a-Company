import React from "react";
import "./income.css";
import MainTitle from "../../components/mainTitle/MainTitle";
import Tables from "../../components/Table/Table";
const Income = () => {
  return (
    <>
      <section className="income py-5">
        <div className="container ">
          {/* Start Main Title  */}
          <MainTitle title={"  إيرادات الشهر الحالي"} />
          {/* Start Main Title  */}

          <div className="table w-full mt-7 rounded-md overflow-hidden">
            <Tables  data={'data'}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Income;
