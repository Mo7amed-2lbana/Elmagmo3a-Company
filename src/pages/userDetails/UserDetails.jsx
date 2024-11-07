import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useParams } from "react-router-dom";
import { MdClose } from "react-icons/md";
import imgPerson from "../../assets/myimg.png";

const UserDetails = ({ openModal, setOpenModal, userId }) => {
  //   console.log(userId);

  return (
    <>
      <div className="user-details relative z-[999999999999999999]">
        {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
        <Modal
          className="relative z-[9999999999]"
          dismissible
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header className="">
            <div className="header flex justify-between items-center w-full">
              <h4 className="text-start md:w-[550px] block ">
                معلومات عن المندوب
              </h4>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="parent flex justify-between items-center gap-4">
              <div className="details flex-1 ">
                <div className=" bg-[#fafafa] p-2 hover:bg-[#f1f1f1] my-3 flex items-center">
                  <h3 className=" transition-all  hover:ms-1 font-[600]">
                    المندوب :
                  </h3>
                  <span className="text-main-color text-center block ms-3">
                    محمد البنا{" "}
                  </span>
                </div>

                <div className=" bg-[#fafafa] p-2 hover:bg-[#f1f1f1] my-3 flex items-center">
                  <h3 className=" transition-all  hover:ms-1 font-[600]">
                    الرخصه :
                  </h3>
                  <span className="text-main-color text-center block ms-3">
                    3310
                  </span>
                </div>

                <div className=" bg-[#fafafa] p-2 hover:bg-[#f1f1f1] my-3 flex items-center">
                  <h3 className=" transition-all  hover:ms-1 font-[600]">
                    منطقة :
                  </h3>
                  <span className="text-main-color text-center block ms-3">
                    التجمع
                  </span>
                </div>

                <div className=" bg-[#fafafa] p-2 hover:bg-[#f1f1f1] my-3 flex items-center">
                  <h3 className=" transition-all  hover:ms-1 font-[600]">
                    الهاتف :
                  </h3>
                  <span className="text-main-color text-center block ms-3">
                    011234344355
                  </span>
                </div>

                <div className=" bg-[#fafafa] p-2 hover:bg-[#f1f1f1] my-3 flex items-center">
                  <h3 className=" transition-all  hover:ms-1 font-[600]">
                    جي بي اس :
                  </h3>
                  <span className="text-main-color text-center block ms-3">
                    10N
                  </span>
                </div>
              </div>
              <div className="image border  rounded-lg p-3 border-1 ">
                <img
                  src={imgPerson}
                  alt="user image"
                  className="h-[300px] rounded-md"
                />
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
};

export default UserDetails;
