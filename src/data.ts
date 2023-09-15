import { Board } from "./models/Board";
import { Task } from "./models/Task";

const doing: Task[] = [
  {
    createdOn: Date.now(),
    subtasks: [
      {
        isDone: false,
        title: "Example",
      },
    ],
    title: "First",
    updatedOn: Date.now(),
  },
  {
    createdOn: Date.now(),
    subtasks: [
      {
        isDone: false,
        title: "Example",
      },
    ],
    title: "First",
    updatedOn: Date.now(),
  },
  {
    createdOn: Date.now(),
    subtasks: [
      {
        isDone: false,
        title: "Example",
      },
    ],
    title: "First",
    updatedOn: Date.now(),
  },
];

export const board: Board = {
  columns: [
    {
      title: "todo",
      tasks: doing,
    },
    {
      title: "doing",
      tasks: doing,
    },
    {
      title: "done",
      tasks: doing,
    },
  ],
};
