import { Task } from "./Task";

export interface Board {
  title: string;
  todo: Task[];
  doing: Task[];
  done: Task[];
}
