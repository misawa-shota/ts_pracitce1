import { type TaskStatus } from "../types/TaskStatusType.js";
import { UiComponent } from "./UiComponent.js";
export declare class TaskList extends UiComponent<HTMLDivElement> {
    private taskStatus;
    constructor(taskStatus: TaskStatus);
    setup(): void;
}
//# sourceMappingURL=TaskList.d.ts.map