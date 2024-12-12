import React from "react";
import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { CiDollar } from "react-icons/ci";
import { GrTransaction } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="w-screen h-12 bg-black">
      <div className="flex items-center justify-between h-full text-xl font-bold text-[#d2d2d2] px-8">
        <Link href={"/dashboard"}>
          <MdOutlineSpaceDashboard className=" w-[30px] h-[30px]" />
        </Link>
        <Link href={"/ink"}>
          <CiDollar className=" w-[30px] h-[30px]" />
        </Link>
        <Link href={"/"}>
          <GiExpense className=" w-[30px] h-[30px]" />
        </Link>
        <Link href={"/"}>
          <GrTransaction className=" w-[30px] h-[30px]" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
