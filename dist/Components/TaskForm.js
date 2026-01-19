import { TaskItem } from "./TaskItem.js";
export class TaskForm {
    element;
    titleInputEl;
    descriptionInputEl;
    constructor() {
        this.element = document.querySelector("#task-form");
        this.titleInputEl = document.querySelector("#form-title");
        this.descriptionInputEl = document.querySelector("#form-description");
        this.bindEvents();
    }
    submitHandler(event) {
        event.preventDefault();
        const task = this.makeNewTask();
        const item = new TaskItem(task);
        item.mount("#Todo");
        this.clearInputs();
    }
    bindEvents() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    clearInputs() {
        this.titleInputEl.value = "";
        this.descriptionInputEl.value = "";
    }
    makeNewTask() {
        return {
            title: this.titleInputEl.value,
            description: this.descriptionInputEl.value,
        };
    }
}
//# sourceMappingURL=TaskForm.js.map