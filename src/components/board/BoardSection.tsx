import React from "react";
import SubTitle from "../ui/SubTitle";
import TaskTile from "../task/TaskTile";

interface Props {}

const BoardSection = (props: Props) => {
  return (
    <div className="main__todo w-64">
      <SubTitle className="text-xs tracking-widest capitalize">
        Todo (3)
      </SubTitle>
      <ul className="mt-6 flex flex-col gap-y-4">
        <TaskTile />
        <TaskTile />
        <TaskTile />
      </ul>
    </div>
  );
};

export default BoardSection;
