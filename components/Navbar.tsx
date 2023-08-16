import Image from "next/image";
import React, { useState } from "react";
import { MainNav } from "./Navbar/main-nav";
import { Button } from "./ui/button";
import { NavActions } from "./Navbar/nav-actions";

const Navbar = () => {
  return (
    <nav className=" flex bg-white shadow-xl justify-around items-center py-1 fixed z-50 w-full">
      <div className="logo_container">
        <Image
          src={"/assests/logo.svg"}
          alt="Logo"
          width={80}
          height={80}
          className=""
        />
      </div>
      <MainNav className={"hidden md:block"} />
      <Button className="bg-BtnColor hover:shadow-lg hover:bg-BtnColor transition-all font-sans  hidden md:block">
        Get Started
      </Button>
      <NavActions />
    </nav>
  );
};

export default Navbar;
