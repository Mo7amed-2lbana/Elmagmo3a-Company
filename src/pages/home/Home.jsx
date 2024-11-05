import React from "react";
import MyImg from "../../assets/home.png";
import HeaderAnimation from "../../components/headerAnimation/HeaderAnimation";
import { useRef } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="parent flex items-center justify-between gap-10 z-3">
            <div className="iamge z-[999999999] relative my-10">
              <img
                src={MyImg}
                alt="my image"
                className=" h-[450px]  animate__animated animate__slideInRight"
              />
            </div>
            <div className="info-details  animate__animated animate__slideInRight  w-[60%]">
              <h3 className="text-main-color text-xl">مرحبا بكم معنا في </h3>
              <HeaderAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="layer absolute  strat-0 top-0 bg-main-color  w-[40%] h-[100vh]"></div>
    </>
  );
};

export default Home;
