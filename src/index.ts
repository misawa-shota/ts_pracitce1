import { TaskForm } from "./Components/TaskForm.js";
import { TaskList } from "./Components/TaskList.js";
import { status } from "./types/TaskStatusType.js";

new TaskForm();

status.forEach((taskStatus) => {
  const list = new TaskList(taskStatus);
  list.mount("#container");
});