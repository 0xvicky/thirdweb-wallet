"use client";
import React from "react";
import {Connect} from "@/components";

const Navbar = () => {
  return (
    <div className=' p-5 flex justify-between bg-zinc-900'>
      <div>WalletConnect</div>
      <Connect />
    </div>
  );
};

export default Navbar;
