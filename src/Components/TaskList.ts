import { status, type TaskStatus } from "../types/TaskStatusType.js";
import { UiComponent } from "./UiComponent.js";

export class TaskList extends UiComponent<HTMLDivElement> {

  constructor(private taskStatus: TaskStatus) {
    super("#task-list-template");
    this.setup();
  }

  override setup() {
    this.element.querySelector("h2")!.textContent = `${this.taskStatus}`;
    this.element.querySelector("ul")!.id = `${this.taskStatus}`;
  }
}