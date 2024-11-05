import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const FormCom = () => {
  // all data state
  const [allData, setAllData] = useState(null);
  const addData = [];

  // Handle Submit formik
  const addDataToState = useCallback(
    (value) => {
      localStorage.setItem("data", JSON.stringify(addData));
      addData.push(value);
    },
    [allData]
  );

  // setAllData(JSON.parse(localStorage.getItem("data")));

  const nav = useNavigate();

  // formik library to handle form
  const formik = useFormik({
    initialValues: {
      id: "",
      userName: "",
      proName: "",
      proMonay: "",
      proDate: "",
    },
    onSubmit: (val) => {
      addDataToState(val);
      // nav("/income");
    },
  });
  // }

  // handle reload for data in all date state
  useEffect(() => {
    if (localStorage.getItem("data") !== null && !allData) {
      setAllData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex px-2 flex-col  mx-auto  gap-4"
      >
        {/* User */}
        <div className="user grid grid-cols-2 items-center gap-3">
          {/* ID  */}
          <div className="form-group mb-3 flex items-center">
            <label
              htmlFor="ID"
              className="mb-2 block text-lg text-white me-2 w-[20%] "
            >
              رقم الرخصة :{" "}
            </label>
            <input
              type="text"
              placeholder="0002"
              id="id"
              name="id"
              onChange={formik.handleChange}
              value={formik.values.id}
              className=" w-full rounded-md"
            />
          </div>
          {/* ID  */}
          {/* User Name  */}
          <div className="form-group mb-3 flex items-center">
            <label
              htmlFor="uName"
              className="mb-2 block text-lg text-white  w-[20%]"
            >
              إسم المندوب :{" "}
            </label>
            <input
              type="text"
              placeholder="محمد "
              id="userName"
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="w-full rounded-md"
            />
          </div>
          {/* User Name  */}
        </div>
        {/* User */}

        {/* Product Name  */}
        <div className="form-group mb-3 flex items-center gap-2">
          <label htmlFor="proName" className="mb-2 block text-lg text-white ">
            الصنف:
          </label>
          <input
            type="text"
            placeholder="أدخل اسم الصنف"
            id="proName"
            name="proName"
            onChange={formik.handleChange}
            value={formik.values.proName}
            className="w-full rounded-md"
          />
        </div>
        {/* Product Name  */}
        {/* Monay */}
        <div className="allMonay grid grid-cols-2 items-center gap-3">
          {/* Monay  */}
          <div className="form-group mb-3 flex items-center">
            <label
              htmlFor="monay"
              className="mb-2 block text-lg text-white w-[20%]"
            >
              المبلغ المستلم:{" "}
            </label>
            <input
              type="text"
              placeholder="2000 جنيه"
              id="proMonay"
              name="proMonay"
              onChange={formik.handleChange}
              value={formik.values.proMonay}
              className=" w-full rounded-md"
            />
          </div>
          {/* Monay  */}
          {/* Mounth  */}
          <div className="form-group mb-3 flex items-center">
            <label
              htmlFor="mounth"
              className="mb-2 block text-lg text-white  w-[25%]"
            >
              تاريخ الإستلام :
            </label>
            <input
              type="date"
              placeholder="الشهر الحالي"
              id="proDate"
              name="proDate"
              onChange={formik.handleChange}
              value={formik.values.proDate}
              className="w-full rounded-md"
            />
          </div>
          {/* Mounth  */}
        </div>
        {/* Monay */}

        <Button
          type="submit"
          color=""
          className="bg-main-color hover:bg-[#46be80] mb-2 text-white font-bold "
        >
          إضافة
        </Button>
      </form>
    </>
  );
};

export default FormCom;
