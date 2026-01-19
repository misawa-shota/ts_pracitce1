import type { Task } from "../types/TaskType.js";
import { TaskItem } from "./TaskItem.js";

export class TaskForm {
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLTextAreaElement;

  constructor() {
    this.element = document.querySelector("#task-form")!;
    this.titleInputEl = document.querySelector("#form-title")!;
    this.descriptionInputEl = document.querySelector("#form-description")!;
    this.bindEvents();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    const task = this.makeNewTask();
    const item = new TaskItem(task);
    item.mount("#Todo");
    this.clearInputs();
  }

  private bindEvents() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private clearInputs() {
    this.titleInputEl.value = "";
    this.descriptionInputEl.value = "";
  }

  private makeNewTask(): Task {
    return {
      title: this.titleInputEl.value,
      description: this.descriptionInputEl.value,
    }
  }
}