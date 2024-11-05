import React from "react";
// import "./income.css";
import MainTitle from "../../components/mainTitle/MainTitle";
import Tables from "../../components/Table/Table";
const Store = () => {
  return (
    <>
      <section className="income py-5">
        <div className="container ">
          {/* Start Main Title  */}
          <MainTitle title={"المخزن"} />
          {/* Start Main Title  */}

          <div className="table w-full mt-7 rounded-md overflow-hidden">
            <Tables />
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
