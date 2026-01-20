import type { Task } from "../types/TaskType.js";
import { status, type TaskStatus } from "../types/TaskStatusType.js";
import { UiComponent } from "./UiComponent.js";

export class TaskItem extends UiComponent<HTMLLIElement> {
  task: Task;

  constructor(_task: Task) {
    super("#task-item-template")
    this.task = _task;
    this.setup();
    this.bindEvent();
  }

  override setup() {
    this.element.querySelector("h2")!.textContent = `${this.task.title}`;
    this.element.querySelector("p")!.textContent = `${this.task.description}`;
  }

  clickHandler() {
    if(!this.element.parentElement) return;

    const currentListId = this.element.parentElement.id as TaskStatus;
    const taskStatusIdx = status.indexOf(currentListId);

    if(taskStatusIdx === -1) {
      throw new Error(`タスクステータスが不正です。`);
    }

    const nextListId = status[taskStatusIdx + 1];

    if(nextListId) {
      const nextListEl = document.getElementById(nextListId) as HTMLUListElement;
      nextListEl.appendChild(this.element);
      return;
    }

    this.element.remove();
  }

  bindEvent() {
    this.element.addEventListener("click", this.clickHandler.bind(this));
  }
}