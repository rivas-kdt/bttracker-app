"use client";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import React from "react";
import { redirect } from "next/navigation";

const Header = () => {
  const handleClick = () => {
    redirect("/");
  };
  return (
    <div className="w-screen bg-black h-14 ">
      <div
        className="flex items-center justify-center w-full h-full text-4xl font-bold tracking-tighter "
      >
        <div className="flex px-4 cursor-pointer" 
        onClick={handleClick}>
          <span className="flex gap-1 text-amber-500">
            <FaMoneyBillTransfer className="w-[40px] h-[40px]" />
            BT
          </span>
          Tracker
        </div>
      </div>
    </div>
  );
};

export default Header;
