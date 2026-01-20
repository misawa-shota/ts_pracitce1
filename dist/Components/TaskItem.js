import { status } from "../types/TaskStatusType.js";
import { UiComponent } from "./UiComponent.js";
export class TaskItem extends UiComponent {
    task;
    constructor(_task) {
        super("#task-item-template");
        this.task = _task;
        this.setup();
        this.bindEvent();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.task.title}`;
        this.element.querySelector("p").textContent = `${this.task.description}`;
    }
    clickHandler() {
        if (!this.element.parentElement)
            return;
        const currentListId = this.element.parentElement.id;
        const taskStatusIdx = status.indexOf(currentListId);
        if (taskStatusIdx === -1) {
            throw new Error(`タスクステータスが不正です。`);
        }
        const nextListId = status[taskStatusIdx + 1];
        if (nextListId) {
            const nextListEl = document.getElementById(nextListId);
            nextListEl.appendChild(this.element);
            return;
        }
        this.element.remove();
    }
    bindEvent() {
        this.element.addEventListener("click", this.clickHandler.bind(this));
    }
}
//# sourceMappingURL=TaskItem.js.map