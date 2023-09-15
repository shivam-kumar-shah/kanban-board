import { SubTask } from "./SubTask";

export interface Task {
  title: string;
  subtasks: SubTask[];
  createdOn: number;
  updatedOn: number;
}
