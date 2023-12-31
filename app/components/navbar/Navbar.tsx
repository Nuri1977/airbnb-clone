"use client";

import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";
import Search from "./Search";
import { User } from "@prisma/client";
import Categories from "./Categories";
import SuspenseSearchParams from "../SuspenseSearchParams";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <nav className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <SuspenseSearchParams>
        <Categories />
      </SuspenseSearchParams>
    </nav>
  );
};

export default Navbar;
