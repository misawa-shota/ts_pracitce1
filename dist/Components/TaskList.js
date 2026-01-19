import { status } from "../types/TaskStatusType.js";
import { UiComponent } from "./UiComponent.js";
export class TaskList extends UiComponent {
    taskStatus;
    constructor(taskStatus) {
        super("#task-list-template");
        this.taskStatus = taskStatus;
        this.setup();
    }
    setup() {
        this.element.querySelector("h2").textContent = `${this.taskStatus}`;
        this.element.querySelector("ul").id = `${this.taskStatus}`;
    }
}
//# sourceMappingURL=TaskList.js.map