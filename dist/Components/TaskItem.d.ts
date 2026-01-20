import type { Task } from "../types/TaskType.js";
import { UiComponent } from "./UiComponent.js";
import type { ClickableElement } from "../types/ClickableElementType.js";
export declare class TaskItem extends UiComponent<HTMLLIElement> implements ClickableElement {
    task: Task;
    constructor(_task: Task);
    setup(): void;
    clickHandler(): void;
    bindEvent(): void;
}
//# sourceMappingURL=TaskItem.d.ts.map