import React, { useCallback, useEffect, useState } from "react";
import FormCom from "../../components/Form/FormCom";
import { useFormik } from "formik";
import { Button } from "flowbite-react";

const Login = ({ userAdmin, setUserAdmin }) => {
  // all data state
  const [allData, setAllData] = useState([]);

  // Handle Submit formik
  const addDataToState = useCallback((value) => {
    setAllData([...allData, value]);
    localStorage.setItem("data", JSON.stringify(allData));
  });

  // formik library to handle form
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (val) => addDataToState(val),
  });

  const handleUserAdmin = async () => {
    setUserAdmin(true);
      localStorage.setItem("userAdmin", true);
    
  };

  return (
    <>
      <div className="container mt-5 absolute top-[50%] translate-y-[-50%]">
        <div className="frm w-[50%] mx-auto border border-1  p-2 rounded-md ">
          <h2 className="text-[40px] text-white text-center mb-5">
            تسجيل الدخول
          </h2>
          {/* <FormCom /> */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex px-2 flex-col  mx-auto  gap-4"
          >
            {/*  User Name  */}
            <div className="form-group mb-3  items-center gap-3">
              <label
                htmlFor="userName"
                className="mb-2 block text-lg text-white"
              >
                <span className=" block ">إسم المستخدم : </span>
              </label>
              <input
                type="text"
                placeholder="محمد البنا .........."
                id="userName"
                name="userName"
                onChange={formik.handleChange}
                value={formik.values.proName}
                className="w-full rounded-md"
              />
            </div>
            {/*  User Name  */}
            {/*  Password  */}
            <div className="form-group mb-3  gap-3 items-center">
              <label
                htmlFor="password"
                className="mb-2 block text-lg text-white"
              >
                <span className="w-[120px] block"> كلمة المرور :</span>
              </label>
              <input
                type="password"
                placeholder="****************"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="w-full rounded-md"
              />
            </div>
            {/*  Password */}

            <Button
              type="submit"
              color=""
              onClick={handleUserAdmin}
              className="bg-main-color hover:bg-[#46be80] mb-2 text-white font-bold "
            >
              دخول
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
