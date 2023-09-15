import { PropsWithChildren } from "react";
import { LuLayoutDashboard } from "react-icons/lu";

interface Props extends PropsWithChildren {
  isActive?: boolean;
}

const NavTile = ({ children, isActive = false }: Props) => {
  return (
    <li
      className={`flex flex-row pl-6 py-3 my-1 rounded-r-full font-semibold items-center gap-x-3 cursor-pointer ${
        isActive
          ? "bg-primary text-dark-font-primary"
          : "text-dark-font-secondary hover:bg-surface hover:text-primary"
      }`}
    >
      <LuLayoutDashboard className="text-xl font-bold" />
      <span className="capitalize">{children}</span>
    </li>
  );
};

export default NavTile;
