import React from "react";
import Card from "../ui/Card";
import Title from "../ui/Title";
import SubTitle from "../ui/SubTitle";

interface Props {}

const TaskTile = ({}: Props) => {
  return (
    <Card className="flex flex-col gap-y-1">
      <Title className="text-sm">Build settings UI</Title>
      <SubTitle className="text-xs">0 of 2 subtasks</SubTitle>
    </Card>
  );
};

export default TaskTile;
