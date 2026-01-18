import type { Task } from "./types/TaskType.js";
export declare class TaskItem {
    templateEl: HTMLTemplateElement;
    element: HTMLLIElement;
    task: Task;
    constructor(templateId: string, _task: Task);
    setup(): void;
    mount(selector: string): void;
    clickHandler(): void;
    bindEvent(): void;
}
//# sourceMappingURL=TaskItem.d.ts.map