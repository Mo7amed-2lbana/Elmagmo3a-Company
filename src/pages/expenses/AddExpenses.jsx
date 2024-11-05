import React, { useCallback, useEffect, useState } from "react";
import FormCom from "../../components/Form/FormCom";
import { useFormik } from "formik";
import { Button } from "flowbite-react";

const AddExpenses = () => {
  // all data state
  const [allData, setAllData] = useState([]);

  // Handle Submit formik
  const addDataToState = useCallback((value) => {
    setAllData([...allData, value]);
    localStorage.setItem("dataExpenses", JSON.stringify(allData));
  });

  // formik library to handle form
  const formik = useFormik({
    initialValues: {
      proName: "",
      proCount: "",
      proMonay: "",
      proDate: "",
    },
    onSubmit: (val) => addDataToState(val),
  });
  // }

  // handle reload for data in all date state
  useEffect(() => {
    if (localStorage.getItem("dataExpenses") !== null && allData.length === 0) {
      setAllData(JSON.parse(localStorage.getItem("dataExpenses")));
    }
  }, []);
  return (
    <>
      <div className="container mt-5 absolute top-[50%] translate-y-[-50%]">
        <div className="frm w-[80%] mx-auto border border-1  p-2 rounded-md ">
          <h2 className="text-[40px] text-white text-center mb-5">
            إضافه مصروف ......
          </h2>
          {/* <FormCom /> */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex px-2 flex-col  mx-auto  gap-4"
          >
            {/* Product Name  */}
            <div className="form-group mb-3 flex items-center gap-2">
              <label
                htmlFor="proName"
                className="mb-2 block text-lg text-white"
              >
                البيان:
              </label>
              <input
                type="text"
                placeholder="المصروف....."
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
                  className="mb-2 block text-lg text-white w-[25%]"
                >
                  المبلغ المدفوع:{" "}
                </label>
                <div className="relative flex w-full">
                  {formik.values.proMonay ? (
                    <span className="absolute top-[50%] translate-y-[-50%] end-[10px]">
                     جنية
                    </span>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    placeholder="2000 جنية"
                    id="proMonay"
                    name="proMonay"
                    onChange={formik.handleChange}
                    value={`${formik.values.proMonay}`}
                    className=" w-full rounded-md"
                  />
                </div>
              </div>
              {/* Monay  */}
              {/* Count  */}
              <div className="form-group mb-3 flex items-center">
                <label
                  htmlFor="count"
                  className="mb-2 block text-lg text-white w-[10%]"
                >
                  الكمية :
                </label>
                <input
                  type="text"
                  placeholder="20"
                  id="proCount"
                  name="proCount"
                  onChange={formik.handleChange}
                  value={formik.values.proCount}
                  className=" w-full rounded-md"
                />
              </div>
              {/* Count  */}
              {/* Mounth  */}
              <div className="form-group  flex items-center">
                <label
                  htmlFor="mounth"
                  className="mb-2 block text-lg text-white  w-[25%]"
                >
                  تاريخ الصرف :
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
              {formik.values.proMonay && formik.values.proCount ? (
                <div className="flex items-center gap-5 justify-center">
                  <h3 className="text-white">الإجمالي : </h3>
                  <div className="py-2 px-10 bg-white rounded-md">
                    {formik.values.proMonay * formik.values.proCount} جنية
                  </div>
                </div>
              ) : (
                ""
              )}
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
        </div>
      </div>
    </>
  );
};

export default AddExpenses;
