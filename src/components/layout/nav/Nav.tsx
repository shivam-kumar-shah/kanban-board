import React from "react";
import NavTile from "./NavTile";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="w-64 h-full fixed bg-card-surface py-6 pr-6">
      <div className="nav__heading uppercase font-bold text-font-secondary text-xs tracking-widest px-6 mb-5">
        All Boards (3)
      </div>
      <ul className="nav__boards">
        <NavTile isActive>Platform Launch</NavTile>
        <NavTile>Marketing Plan</NavTile>
        <NavTile>Roadmap</NavTile>
      </ul>
      <div className="flex flex-row pl-6 py-3 rounded-r-full font-semibold items-center gap-x-3 cursor-pointer text-primary hover:bg-surface">
        <AiOutlineAppstoreAdd className="text-xl font-bold" />
        <span className="capitalize">Create New Board</span>
      </div>
    </div>
  );
};

export default Nav;
