import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <>
      <section className="add absolute top-[50%] end-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="container">
          <div className=" flex gap-5 items-center mb-3">
            <Link to={"/addIncome"}>
              <Button size="" className="text-[24px] font-bold py-2 px-5">إيرادات</Button>
            </Link>
            <Link to={"/AddExpenses"}>
              <Button size="" className="text-[24px] font-bold py-2 px-5">مصروفات </Button>
            </Link>
            <Link to={"/addPursh"}>
              <Button size="" className="text-[24px] font-bold py-2 px-5">مشتريات </Button>
            </Link>
            <Link to={"/addStore"}>
            <Button size="" className="text-[24px] font-bold py-2 px-5">المخزون </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
