import type { Task } from "../types/TaskType.js";
import { UiComponent } from "./UiComponent.js";
export declare class TaskItem extends UiComponent<HTMLLIElement> {
    task: Task;
    constructor(_task: Task);
    setup(): void;
    clickHandler(): void;
    bindEvent(): void;
}
//# sourceMappingURL=TaskItem.d.ts.map