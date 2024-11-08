import "./user.css";
import imgPerson from "../../assets/myimg.png";
import MainTitle from "../../components/mainTitle/MainTitle";
import UserDetails from "../userDetails/UserDetails";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";


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
  const [openModal, setOpenModal] = useState(false);

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
            <div className="items grid grid-cols-5 gap-5">
              {nums.map((el, idx) => (
                <>
                  <div className="item relative cursor-pointer border  overflow-hidden rounded-md">
                    <div className="image">
                      <img
                        style={{ verticalAlign: "bottom" }}
                        src={imgPerson}
                        alt="image person"
                        className=" w-[200px]"
                      />
                    </div>
                    <div className="overLay  top-[100%] w-full h-full absolute bg-[rgba(0,0,0,.5)] text-white flex justify-center items-center">
                      <div className="details text-center flex items-center gap-1">
                        <h2
                          onClick={() => {
                            setUserId(idx);
                            setOpenModal(true);
                          }}
                          className=" border-b-2 font-[700]"
                        >
                          تفاصيل
                        </h2>
                          <FaArrowAltCircleLeft size={20} className="mt-1"/>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              <UserDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
