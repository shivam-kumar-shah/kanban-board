import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

import Title from "../../ui/Title";
import AppButton from "../../ui/AppButton";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="h-20 flex flex-row items-center fixed w-full z-50 px-6">
      <div className="logo flex flex-row gap-x-4 items-center h-full w-64">
        <div className="logo__image w-6 aspect-square">
          <img src="kanban-board/logo.svg" alt="logo" className="h-full" />
        </div>
        <Title className="logo__title text-3xl">kanban</Title>
      </div>
      <Title className="text-xl">Platform Launch</Title>
      <AppButton
        onClick={() => {}}
        className="flex flex-row gap-x-2 items-center"
      >
        <FaPlus className="text-surface font-semibold text-xs" />
        <span className="text-base font-semibold">Add New Task</span>
      </AppButton>
      <a href="#" title="Options" className="text-xl ml-3">
        <BsThreeDotsVertical />
      </a>
    </div>
  );
};

export default Header;
