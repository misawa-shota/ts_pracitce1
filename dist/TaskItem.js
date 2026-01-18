import { status } from "./types/TaskStatusType.js";
export class TaskItem {
    templateEl;
    element;
    task;
    constructor(templateId, _task) {
        this.templateEl = document.querySelector(templateId);
        const clone = this.templateEl.content.cloneNode(true);
        this.element = clone.firstChild;
        this.task = _task;
        this.setup();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.task.title}`;
        this.element.querySelector("p").textContent = `${this.task.description}`;
    }
    mount(selector) {
        const targetEl = document.querySelector(selector);
        targetEl.insertAdjacentElement("beforeend", this.element);
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