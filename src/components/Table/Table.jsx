import { Button, Table, TableBody } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Tables({data}) {
  // all data state to get income data from localStorage
  const [getAllData, setGetAllData] = useState(null);

  // Calc Monay from table
  let allMonay = 0;

  // set data from localStorage to getAllData state
  useEffect(() => {
    if (!getAllData && localStorage.getItem(data) !== null) {
      setGetAllData(JSON.parse(localStorage.getItem(data)));
    }
  }, [getAllData]);

  const removeElement = (idx) => {
    localStorage.setItem(
      "dataExpenses",
      JSON.stringify(getAllData.filter((_, i) => i !== idx))
    );
    setGetAllData(getAllData.filter((_, i) => i !== idx))
    // localStorage.setItem("data", JSON.stringify(getAllData));
  };

  return (
    <div className="parent">
      {/* start table  */}
      <div className="tbl overflow-auto h-[350px]">
        <Table>
          <tr className="text-center bg-[#155E75] text-white text-[18px]">
            <th className="py-3 font-[400]">رقم </th>
            <th className="py-3 font-[400]">الرخصة</th>
            <th className="py-3 font-[400]">إسم المندوب</th>
            <th className="py-3 font-[400]">الصنف</th>
            <th className="py-3 font-[400]">المبلغ المستلم</th>
            <th className="py-3 font-[400]">تاريخ الإستلام</th>
            <th className="py-3 font-[400]">اخري</th>
          </tr>
          <TableBody className="divide-y text-center">
            {getAllData
              ? getAllData?.map((el, idx) => {
                  allMonay += +el.proMonay;
                  localStorage.setItem("allMonay", allMonay);
                  return (
                    <Table.Row
                      key={idx * el.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-[#f2f2f2] "
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {idx + 1}
                      </Table.Cell>
                      <Table.Cell className="text-[#333]">{el.id}</Table.Cell>
                      <Table.Cell className="text-[#333]">{el.userName}</Table.Cell>
                      <Table.Cell className="text-[#333]">{el.proName}</Table.Cell>
                      <Table.Cell className="text-[#333]">{el.proMonay} جنيه</Table.Cell>
                      <Table.Cell className="text-[#333]">{el.proDate}</Table.Cell>
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
  );
}
