import { SubTask } from "./SubTask";
import { Status } from "./enum";

export interface Task {
  title: string;
  subtasks: SubTask[];
  status: Status;
}
