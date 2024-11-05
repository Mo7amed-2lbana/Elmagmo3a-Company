import "./user.css";
import imgPerson from "../../assets/myimg.png";
import MainTitle from "../../components/mainTitle/MainTitle";

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
              {nums.map(
                (el, idx) =>(
                    <>
                      <div className="item relative cursor-pointer bg-white overflow-hidden rounded-md">
                        <div className="iamge ">
                          <img
                            src={imgPerson}
                            alt="image person"
                            className=""
                          />
                        </div>
                        <div className="overLay absolute top-[100%] w-full h-full bg-[rgba(21,94,117)] text-white flex justify-center items-center">
                            <div className="details text-center">

                              <h3 > المندوب: <span className="text-main-color">محمد البنا </span></h3>
                              <h3 >الرخصه : <span className="text-main-color">3310</span></h3>
                              <h3 >منطقة : <span className="text-main-color">التجمع</span></h3>

                            </div>
                        </div>
                      </div>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
