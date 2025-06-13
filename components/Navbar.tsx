import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <div className="flex items-center gap-2.5 cursor pointer ">
          <Image src='/images/logo.svg' alt="navbar" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
