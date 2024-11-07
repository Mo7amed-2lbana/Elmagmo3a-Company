import "./user.css";
import imgPerson from "../../assets/myimg.png";
import MainTitle from "../../components/mainTitle/MainTitle";
import { Link, Outlet } from "react-router-dom";
import UserDetails from "../userDetails/UserDetails";
import { useState } from "react";

const User = () => {
  let allMonay = 0;
  const arr = [
    {
      id: "001",
      monay: 200,
    },
    {
      id: "002",
      monay: 300,
    },
    {
      id: "003",
      monay: 400,
    },
  ];

  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
  ];

  arr.map((el) => {
    allMonay !== el.monay ? (allMonay += el.monay) : "";
  });

  const [userId, setUserId] = useState(null);
  const [openModal, setOpenModal] = useState(true);


  console.log(allMonay);

  return (
    <>
      <div className=" user relative z-2  py-10 ms-10 ">
        <div className=" container ">
          <div className=" user-info rounded-lg ">
            {/* Start Main Title  */}
            <div className="title py-4">
              <MainTitle title={"قائمة المناديب"} />
            </div>
            {/* Start Main Title  */}
            <div className="items grid grid-cols-5 gap-3">
              {nums.map((el, idx) => (
                <>
                  <div className="item relative cursor-pointer bg-white overflow-hidden rounded-md">
                    <div className="iamge bg-red-400 hover:overflow-hidden ">
                      <img
                        style={{ verticalAlign: "bottom" }}
                        src={imgPerson}
                        alt="image person"
                        className=" w-[200px]"
                      />
                    </div>
                    <div className="overLay  top-[100%] w-full h-full absolute bg-[rgba(21,94,117)] text-white flex justify-center items-center">
                      <div className="details text-center">
                        {/* <h3 > المندوب: <span className="text-main-color">محمد البنا </span></h3>
                              <h3 >الرخصه : <span className="text-main-color">3310</span></h3>
                              <h3 >منطقة : <span className="text-main-color">التجمع</span></h3>
                              <h3 >الهاتف: <span className="text-main-color">01112356854</span></h3>
                              <h3 >جي بي اس  : <span className="text-main-color">10N</span></h3> */}
                        <h2 onClick={()=>{
                          setUserId(idx)
                          setOpenModal(true)
                        }}>
                          معلومات عن المندوب
                        </h2>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <UserDetails openModal={openModal} setOpenModal={setOpenModal} userId={userId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
