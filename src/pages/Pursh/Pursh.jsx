import React from "react";
// import "./income.css";
import MainTitle from "../../components/mainTitle/MainTitle";
import Tables from "../../components/Table/Table";
import { Button, Table, TableBody } from "flowbite-react";
import { useEffect, useState } from "react";
const Pursh = () => {
  // all data state to get income data from localStorage
  const [getAllData, setGetAllData] = useState(null);

  console.log(getAllData)

  // Calc Monay from table
  let allMonay = 0;

  // set data from localStorage to getAllData state
  useEffect(() => {
    if (!getAllData && localStorage.getItem("dataPursh") !== null) {
      setGetAllData(JSON.parse(localStorage.getItem("dataPursh")));
    }
  }, [getAllData]);

  const removeElement = (idx) => {
    localStorage.setItem(
      "dataPursh",
      JSON.stringify(getAllData.filter((_, i) => i !== idx))
    );
    setGetAllData(getAllData.filter((_, i) => i !== idx));
    // localStorage.setItem("data", JSON.stringify(getAllData));
  };
  return (
    <>
      <section className="income py-5">
        <div className="container ">
          {/* Start Main Title  */}
          <MainTitle title={" مشتريات الشهر الحالي"} />
          {/* Start Main Title  */}

          <div className="table w-full mt-7 rounded-md overflow-hidden">
          <div className="table w-full mt-7 rounded-md overflow-hidden">
            <div className="parent">
              {/* start table  */}
              <div className="tbl overflow-auto h-[350px]">
                <Table>
                  <tr className="text-center bg-[#155E75] text-white text-[18px]">
                    <th className="py-3 font-[400]">رقم </th>
                    <th className="py-3 font-[400]">البيان</th>
                    <th className="py-3 font-[400]">المبلغ</th>
                    <th className="py-3 font-[400]">الكميه</th>
                    <th className="py-3 font-[400]">الإجمالي</th>
                    <th className="py-3 font-[400]">تاريخ الصرف</th>
                  </tr>
                  <TableBody className="divide-y text-center">
                    {getAllData
                      ? getAllData?.map((el, idx) => {
                          allMonay += +el.proMonay * +el.proCount;
                          localStorage.setItem("allMonay", allMonay);
                          return (
                            <Table.Row
                              key={idx * el.id}
                              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-[#f2f2f2] "
                            >
                              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {idx + 1}
                              </Table.Cell>

                              <Table.Cell className="text-[#333]">
                                {el.proName}
                              </Table.Cell>
                              <Table.Cell className="text-[#333]">
                                {el.proMonay} جنيه 
                              </Table.Cell>
                              <Table.Cell className="text-[#333]">
                                {el.proCount}
                              </Table.Cell>
                              
                              <Table.Cell className="text-[#333]">
                                {el.proMonay * el.proCount} جنيه
                              </Table.Cell>
                              

                              <Table.Cell className=" flex justify-center items-center text-[#333]">
                                <div className="flex gap-5">
                                  <Button color="blue">تعديل</Button>
                                  <Button
                                    color="failure"
                                    onClick={() => removeElement(idx)}
                                  >
                                    حذف
                                  </Button>
                                </div>
                              </Table.Cell>
                            </Table.Row>
                          );
                        })
                      : "Loading.............."}
                  </TableBody>
                </Table>
              </div>
              {/* end table  */}
              {/* start all Monay div   */}
              <div className="all-monay px-3 bg-[#155E75] rounded-md text-white text-lg py-4 my-5 w-fit ms-auto flex gap-2">
                <h2>إجمالي المبلغ المستلم :</h2>
                <span className="font-bold ">{allMonay} جنيه</span>
              </div>
              {/* end all Monay div   */}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pursh;
